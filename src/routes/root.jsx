import { Link } from 'react-router-dom';

function Root() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <ul className='bg-gray-100 p-6 rounded-lg shadow-lg'>
        <li><Link className="text-lg py-2 px-4 text-center hover:bg-green-400" to="/twitter">Twitter/X.com</Link></li>
        <li><Link className="text-lg py-2 px-4 text-center hover:bg-green-400" to="/urlshortner">Url Shortner app</Link></li>
      </ul>
    </div>
  );
}

export default Root;