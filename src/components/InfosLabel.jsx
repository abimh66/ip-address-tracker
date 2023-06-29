/* eslint-disable react/prop-types */

const InfosLabel = (props) => {
  return (
    <div className="text-center md:w-1/5 md:border-l-2 md:text-start md:pl-4 md:first:border-none">
      <p className="uppercase text-lightGrey text-xs font-light">
        {props.labelName}
      </p>
      <p className="text-darkGrey font-bold text-lg">{props.labelContent}</p>
    </div>
  );
};

export default InfosLabel;
