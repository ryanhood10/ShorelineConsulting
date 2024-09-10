import React, { useState, useEffect } from 'react';

const DatabaseInfo = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'definition',
        'dbmsdefinition',
        'dbvsdbms',
        'dbmsvsdatalake',
        'howitworks',
        'components',
        'examples',
        'why',
        'usecases',
        'choose',
      ];
      const offset = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= offset && element.offsetTop + element.offsetHeight > offset) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-6 lg:px-12 py-16 grid lg:grid-cols-4 gap-8">
        {/* Aside with navigation */}
        <aside className="hidden lg:block sticky top-24 h-screen col-span-1 space-y-4 bg-gray-800 p-6 rounded-lg">
          <h4
            className={`cursor-pointer ${activeSection === 'definition' ? 'text-blue-400' : ''}`}
            onClick={() => handleScrollTo('definition')}
          >
            What is database management?
          </h4>
          <h4
            className={`cursor-pointer ${activeSection === 'dbmsdefinition' ? 'text-blue-400' : ''}`}
            onClick={() => handleScrollTo('dbmsdefinition')}
          >
            What is a database management system?
          </h4>
          <h4
            className={`cursor-pointer ${activeSection === 'dbvsdbms' ? 'text-blue-400' : ''}`}
            onClick={() => handleScrollTo('dbvsdbms')}
          >
            Database vs Database Management System
          </h4>
          
          <h4
            className={`cursor-pointer ${activeSection === 'howitworks' ? 'text-blue-400' : ''}`}
            onClick={() => handleScrollTo('howitworks')}
          >
            How does database management work?
          </h4>
          <h4
            className={`cursor-pointer ${activeSection === 'components' ? 'text-blue-400' : ''}`}
            onClick={() => handleScrollTo('components')}
          >
            Components of a DBMS
          </h4>
          <h4
            className={`cursor-pointer ${activeSection === 'examples' ? 'text-blue-400' : ''}`}
            onClick={() => handleScrollTo('examples')}
          >
            DBMS Examples
          </h4>
          <h4
            className={`cursor-pointer ${activeSection === 'why' ? 'text-blue-400' : ''}`}
            onClick={() => handleScrollTo('why')}
          >
            Why businesses need DBMS
          </h4>
          <h4
            className={`cursor-pointer ${activeSection === 'usecases' ? 'text-blue-400' : ''}`}
            onClick={() => handleScrollTo('usecases')}
          >
            DBMS Use Cases
          </h4>
          <h4
            className={`cursor-pointer ${activeSection === 'choose' ? 'text-blue-400' : ''}`}
            onClick={() => handleScrollTo('choose')}
          >
            How to choose a DBMS
          </h4>
        </aside>

        {/* Main content */}
        <div className="col-span-3 space-y-12">
          <section id="definition">
            <h2 className="text-2xl font-bold">What is database management?</h2>
            <p className="mt-4">
              Database management refers to a series of actions that allow businesses to manipulate data throughout its lifecycle. 
              As data grows, managing it becomes essential to prevent performance issues, maintain availability, 
              and ensure compliance and security.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Monitoring application performance and data</li>
              <li>Planning for storage and capacity growth</li>
              <li>Establishing backup and disaster recovery solutions</li>
              <li>Archiving, partitioning, and replicating data</li>
            </ul>
          </section>

          <section id="dbmsdefinition">
            <h2 className="text-2xl font-bold">What is a database management system?</h2>
            <p className="mt-4">
              A database management system (DBMS) is software that manages databases and their data. Popular DBMS options include
              Microsoft SQL Server, Oracle Database, and PostgreSQL. A DBMS enables users to control their data, 
              perform queries, and manage the structure of a database.
            </p>
          </section>

          {/* Additional sections would follow the same pattern */}
          <section id="dbvsdbms">
            <h2 className="text-2xl font-bold">Database vs Database Management System</h2>
            <p className="mt-4">
              A database is the store of information, while a DBMS is the software that allows organizations to manage and access that data.
            </p>
          </section>

          <section id="howitworks">
            <h2 className="text-2xl font-bold">How does database management work?</h2>
            <p className="mt-4">
              Database management ensures that databases operate efficiently and securely. Using best practices, database managers can 
              ensure that data is stored, retrieved, and managed properly, maintaining performance and integrity.
            </p>
          </section>

          {/* Further sections */}
        </div>
      </div>
    </section>
  );
};

export default DatabaseInfo;
