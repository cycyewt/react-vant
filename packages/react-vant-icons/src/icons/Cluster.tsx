import * as React from 'react';
import IconBase, { IconBaseProps } from './IconBase';

const SvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M527.778 333.333v84.386c148.43 11.291 271.778 112.316 315.916 248.948h45.195c30.682 0 55.555 24.873 55.555 55.555v111.111c0 30.683-24.873 55.556-55.555 55.556H777.778c-30.683 0-55.556-24.873-55.556-55.556v-111.11c0-30.683 24.873-55.556 55.556-55.556h6.948c-41.236-105.59-139.513-182.616-256.948-193.2v193.2h27.778c30.682 0 55.555 24.873 55.555 55.555v111.111c0 30.683-24.873 55.556-55.555 55.556H444.444c-30.682 0-55.555-24.873-55.555-55.556v-111.11c0-30.683 24.873-55.556 55.555-55.556h27.778v-193.2c-117.435 10.584-215.712 87.61-256.948 193.2h6.948c30.683 0 55.556 24.873 55.556 55.555v111.111c0 30.683-24.873 55.556-55.556 55.556h-111.11c-30.683 0-55.556-24.873-55.556-55.556v-111.11c0-30.683 24.873-55.556 55.555-55.556h45.195c44.138-136.632 167.486-237.657 315.916-248.948v-84.386h-27.778c-30.682 0-55.555-24.873-55.555-55.555V166.667c0-30.683 24.873-55.556 55.555-55.556h111.112c30.682 0 55.555 24.873 55.555 55.556v111.11c0 30.683-24.873 55.556-55.555 55.556h-27.778z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const SvgCluster = (props: Omit<IconBaseProps, 'name'>) => {
  return (
    <IconBase name={SvgCluster.name} {...props}>
      <SvgIcon />
    </IconBase>
  );
};

export default SvgCluster;
