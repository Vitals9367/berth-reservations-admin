import React from 'react';

type Props = { className?: string };

export default ({ className = '' }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 480 480" className={className}>
    <path d="M259.3 41.76c-120.53 0-218.23 97.7-218.23 218.24s97.7 218.23 218.23 218.23S477.53 380.52 477.53 260 379.83 41.76 259.3 41.76zm16.37 145.59q32-.54 63.85-3.11a236.1 236.1 0 0 1 11.6 59.38h-75.45zm0-32.77V85.47a243.79 243.79 0 0 1 50.53 66.95q-25.2 1.76-50.53 2.16zm-32.74-69.11v69.11q-25.31-.42-50.53-2.16a243.79 243.79 0 0 1 50.53-66.95zm0 101.88v56.27h-75.45a236.54 236.54 0 0 1 11.6-59.38q31.86 2.59 63.85 3.11zm-108.24 56.27H74.63a183.77 183.77 0 0 1 20.58-69.87q25.17 4.25 50.6 7.19a268.91 268.91 0 0 0-11.12 62.68zm0 32.74a269.56 269.56 0 0 0 11.07 62.69q-25.41 2.93-50.52 7.18a183.88 183.88 0 0 1-20.58-69.87zm32.82 0h75.45v56.27q-32 .53-63.85 3.1a236.47 236.47 0 0 1-11.63-59.37zm75.45 89v69.12a243.94 243.94 0 0 1-50.53-66.95q25.19-1.73 50.5-2.14zm32.74 69.12v-69.09q25.31.44 50.53 2.17a243.79 243.79 0 0 1-50.56 66.95zm0-101.88v-56.24h75.45a236 236 0 0 1-11.6 59.37q-31.89-2.58-63.88-3.1zm108.25-56.27H444a184 184 0 0 1-20.57 69.87q-25.2-4.2-50.63-7.2a269.44 269.44 0 0 0 11.12-62.64zm0-32.74A269.38 269.38 0 0 0 372.74 181q25.45-2.94 50.65-7.2A183.77 183.77 0 0 1 444 243.62zm19.81-99.81q-21.26 3.25-42.68 5.52a272.23 272.23 0 0 0-41-64.41 186.08 186.08 0 0 1 83.62 58.92zM198.52 84.93a272.39 272.39 0 0 0-41 64.39q-21.37-2.28-42.57-5.51a186 186 0 0 1 83.57-58.88zM114.9 376.17q21.19-3.24 42.57-5.51A272.18 272.18 0 0 0 198.28 435a186 186 0 0 1-83.38-58.83zM320.1 435a272.33 272.33 0 0 0 41-64.38q21.36 2.28 42.56 5.51A186 186 0 0 1 320.1 435z" />
  </svg>
);
