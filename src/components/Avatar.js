import React from "react";

const Avatar = ({ avatar }) => {
  return (
    <div className="relative w-full h-0" style={{ paddingBottom: "100%" }}>
      {avatar ? (
        <img
          src={URL.createObjectURL(avatar)}
          alt="Avatar"
          className="w-full h-full object-cover rounded-full"
          style={{ height: "290px", width: "290px" }}
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 512 512"
          className="absolute top-0 left-0 w-full h-full text-gray-300"
        >
          <path
            fill="currentColor"
            d="M374.37 289.62a155.92 155.92 0 01-99.32 112.39A156.16 156.16 0 01192 462a156 156 0 01-102.06-37.38 155.67 155.67 0 01-38.32-100 156.06 156.06 0 0137.14-101.8 156.18 156.18 0 01101.63-53.91 155.91 155.91 0 01112.33 99.72l15.56-6.25a175.89 175.89 0 00-128.9-111.5A176.38 176.38 0 0064 192a175.49 175.49 0 0044 114.56 175.69 175.69 0 00113.3 60.3 176.06 176.06 0 00126.5-52.12 176.15 176.15 0 0052.11-126.39 175.53 175.53 0 00-59.39-126.65A175.92 175.92 0 00374.37 289.62zM256 336a80 80 0 1180-80 80.09 80.09 0 01-80 80zm80-128a48 48 0 10-48-48 48 48 0 0048 48z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};

export default Avatar;
