import { useState } from 'react';

export const RouteSelection: React.FC = () => {
  const routes = ['Route 1', 'Route 2', 'Route 3'];

  const [selectedRoute, setSelectedRoute] = useState<string>('Choose Route');

  const [open, setOpen] = useState<boolean>(false);

  const handleRouteChange = (route: string) => {
    setSelectedRoute(route);
    setOpen(false);
  };

  const handleRouteOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="inline-flex items-center rounded-lg bg-blue-700 
px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 
dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={handleRouteOpen}
      >
        {selectedRoute}
        <svg
          className="ms-3 h-2.5 w-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {open ? (
        <ul className="menu">
          {routes.map((route, index) => (
            <li key={index} onClick={() => handleRouteChange(route)}>
              {route}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default RouteSelection;
