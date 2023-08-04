import React from 'react';

function HeaderSec(props) {
  const MyCredentials = JSON.parse(localStorage.getItem('user'));

  const headingStyle = {
    padding: '1rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    color: 'Black',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const contentStyle = {
    padding: '2rem',
    backgroundColor: '#ffffff',
    color: '#333333',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'box-shadow 0.3s ease',
  };

  const onMouseEnterHandler = () => {
    contentStyle.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
  };

  const onMouseLeaveHandler = () => {
    contentStyle.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  };

  return (
    <>
      <div className="container p-5 h-100 w-100">
        <div className="row">
          <div
            className="text-center text-dark bg-light"
            style={{ ...contentStyle }}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
          >
            <div className="heading p-3" style={{ ...headingStyle }}>
              Welcome <i> <span className='text-primary'>{MyCredentials.name}</span></i> Your All in One Store
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSec;
