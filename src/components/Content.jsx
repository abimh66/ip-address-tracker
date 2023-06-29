/* eslint-disable react/prop-types */
import { useState } from 'react';
import InfosLabel from './InfosLabel';
import LoadingIcon from './LoadingIcon';

const Content = (props) => {
  const [inputIp, setInputIp] = useState('');
  const onChangeHandler = (e) => {
    setInputIp(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onGetIpAddress(inputIp);
  };

  let infosContent;
  if (props.isLoading) {
    infosContent = <LoadingIcon />;
  } else {
    infosContent = !props.isError ? (
      Object.keys(props.dataGeo).map((objKey) => {
        return (
          <InfosLabel
            key={objKey}
            labelName={objKey}
            labelContent={props.dataGeo[objKey]}
          />
        );
      })
    ) : (
      <p className="text-center text-2xl font-bold w-full">
        Data Not Available
      </p>
    );
  }

  return (
    <div className="absolute w-full flex flex-col  gap-6 justify-center items-center py-5 px-6 z-[9999] ">
      <h1 className="text-3xl text-white">IP Address Tracker</h1>
      <form
        onSubmit={submitHandler}
        className="w-full flex justify-center items-stretch shadow-md md:w-2/5 md:mt-4">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-s-xl focus:outline-none"
          placeholder="Search for any IP Address or domain"
          onChange={onChangeHandler}
        />
        <button
          className="px-5 py-2 bg-darkGrey rounded-e-xl hover:bg-opacity-80"
          type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </form>
      <div className="w-full bg-white shadow-xl rounded-xl py-6 px-1 flex flex-col md:flex-row md:justify-between md:gap-0 md:py-10 md:px-5 md:w-4/5 gap-4">
        {infosContent}
      </div>
    </div>
  );
};

export default Content;
