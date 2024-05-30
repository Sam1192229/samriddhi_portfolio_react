import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="p-4 shadow border-4 border-gray-900 bg-gray-900">
      <div className="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-300 sm:text-center dark:text-gray-300">
          © {currentYear} <a href="https://flowbite.com/" className="hover:underline">Samriddhi Mishra</a>. All Rights Reserved.
        </span>
        <div className="flex flex-row gap-8">
          <a href="mailto:samriddhimishra343@gmail.com" target='blank' className="font-mono text-gray-100 hover:underline decoration-teal-500 underline-offset-4">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'teal', fontSize: 'large' }} />
            &nbsp;Email
          </a>
          <a href="https://www.instagram.com/samriddhi._.12_" target='blank' className="font-mono text-gray-100 hover:underline decoration-teal-500 underline-offset-4">
            <FontAwesomeIcon icon={faInstagram} style={{ color: 'teal', fontSize: 'large' }} />
            &nbsp;Instagram
          </a>
          <a href="https://github.com/Sam1192229" target='blank' className="font-mono text-gray-100 hover:underline decoration-teal-500 underline-offset-4">
            <FontAwesomeIcon icon={faGithub} style={{ color: 'teal', fontSize: 'large' }} />
            &nbsp;Github
          </a>
        </div>
      </div>
    </footer>
  );
}
