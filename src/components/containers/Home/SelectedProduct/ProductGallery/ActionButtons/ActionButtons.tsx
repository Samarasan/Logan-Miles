import React from "react";

function ActionButtons() {
  return (
    <a href="/wlw" target="_blank">
      <div className="Product__ActionList ">
        <div className="Product__ActionItem ">
          <button
            className="RoundButton RoundButton--small RoundButton--flat"
            data-action="open-product-zoom"
          >
            <svg
              className="Icon Icon--plus"
              role="presentation"
              viewBox="0 0 16 16"
            >
              <g
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="square"
              >
                <path d="M8,1 L8,15"></path>
                <path d="M1,8 L15,8"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </a>
  );
}

export default ActionButtons;
