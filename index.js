'use strict';

const TAILWIND_CLASSES = {
  display: {
    block: 'block',
    'inline-block': 'inline-block',
    inline: 'inline',
    flex: 'flex',
    'inline-flex': 'inline-flex',
    table: 'table',
    'inline-table': 'inline-table',
    'table-caption': 'table-caption',
    'table-cell': 'table-cell',
    'table-column': 'table-column',
    'table-column-group': 'table-column-group',
    'table-footer-group': 'table-footer-group',
    'table-header-group': 'table-header-group',
    'table-row-group': 'table-row-group',
    'table-row': 'table-row',
    'flow-root': 'flow-root',
    grid: 'grid',
    'inline-grid': 'inline-grid',
    contents: 'contents',
    'list-item': 'list-item',
    none: 'hidden',
  },
  padding: {
    0: 'p-0',
    '0px': 'p-0',
    '1px': 'p-px',
    '0.125rem': 'p-0.5',
    '0.25rem': 'p-1',
    '0.375rem': 'p-1.5',
    '0.5rem': 'p-2',
    '0.625rem': 'p-2.5',
    '0.75rem': 'p-3',
    '0.875rem': 'p-3.5',
    '1rem': 'p-4',
    '1.25rem': 'p-5',
    '1.5rem': 'p-6',
    '1.75rem': 'p-7',
    '2rem': 'p-8',
    '2.25rem': 'p-9',
    '2.5rem': 'p-10',
    '2.75rem': 'p-11',
    '3rem': 'p-12',
    '3.5rem': 'p-14',
    '4rem': 'p-16',
    '5rem': 'p-20',
    '6rem': 'p-24',
    '7rem': 'p-28',
    '8rem': 'p-32',
    '9rem': 'p-36',
    '10rem': 'p-40',
    '11rem': 'p-44',
    '12rem': 'p-48',
    '13rem': 'p-52',
    '14rem': 'p-56',
    '15em': 'p-60',
    '16rem': 'p-64',
    '18rem': 'p-72',
    '20rem': 'p-80',
    '24rem': 'p-96',
  },
  'padding-left': {
    0: 'pl-0',
    '0px': 'pl-0',
    '1px': 'pl-px',
    '0.125rem': 'pl-0.5',
    '0.25rem': 'pl-1',
    '0.375rem': 'pl-1.5',
    '0.5rem': 'pl-2',
    '0.625rem': 'pl-2.5',
    '0.75rem': 'pl-3',
    '0.875rem': 'pl-3.5',
    '1rem': 'pl-4',
    '1.25rem': 'pl-5',
    '1.5rem': 'pl-6',
    '1.75rem': 'pl-7',
    '2rem': 'pl-8',
    '2.25rem': 'pl-9',
    '2.5rem': 'pl-10',
    '2.75rem': 'pl-11',
    '3rem': 'pl-12',
    '3.5rem': 'pl-14',
    '4rem': 'pl-16',
    '5rem': 'pl-20',
    '6rem': 'pl-24',
    '7rem': 'pl-28',
    '8rem': 'pl-32',
    '9rem': 'pl-36',
    '10rem': 'pl-40',
    '11rem': 'pl-44',
    '12rem': 'pl-48',
    '13rem': 'pl-52',
    '14rem': 'pl-56',
    '15em': 'pl-60',
    '16rem': 'pl-64',
    '18rem': 'pl-72',
    '20rem': 'pl-80',
    '24rem': 'pl-96',
  },
  'padding-right': {
    0: 'pr-0',
    '0px': 'pr-0',
    '1px': 'pr-px',
    '0.125rem': 'pr-0.5',
    '0.25rem': 'pr-1',
    '0.375rem': 'pr-1.5',
    '0.5rem': 'pr-2',
    '0.625rem': 'pr-2.5',
    '0.75rem': 'pr-3',
    '0.875rem': 'pr-3.5',
    '1rem': 'pr-4',
    '1.25rem': 'pr-5',
    '1.5rem': 'pr-6',
    '1.75rem': 'pr-7',
    '2rem': 'pr-8',
    '2.25rem': 'pr-9',
    '2.5rem': 'pr-10',
    '2.75rem': 'pr-11',
    '3rem': 'pr-12',
    '3.5rem': 'pr-14',
    '4rem': 'pr-16',
    '5rem': 'pr-20',
    '6rem': 'pr-24',
    '7rem': 'pr-28',
    '8rem': 'pr-32',
    '9rem': 'pr-36',
    '10rem': 'pr-40',
    '11rem': 'pr-44',
    '12rem': 'pr-48',
    '13rem': 'pr-52',
    '14rem': 'pr-56',
    '15em': 'pr-60',
    '16rem': 'pr-64',
    '18rem': 'pr-72',
    '20rem': 'pr-80',
    '24rem': 'pr-96',
  },
  'padding-top': {
    0: 'pt-0',
    '0px': 'pt-0',
    '1px': 'pt-px',
    '0.125rem': 'pt-0.5',
    '0.25rem': 'pt-1',
    '0.375rem': 'pt-1.5',
    '0.5rem': 'pt-2',
    '0.625rem': 'pt-2.5',
    '0.75rem': 'pt-3',
    '0.875rem': 'pt-3.5',
    '1rem': 'pt-4',
    '1.25rem': 'pt-5',
    '1.5rem': 'pt-6',
    '1.75rem': 'pt-7',
    '2rem': 'pt-8',
    '2.25rem': 'pt-9',
    '2.5rem': 'pt-10',
    '2.75rem': 'pt-11',
    '3rem': 'pt-12',
    '3.5rem': 'pt-14',
    '4rem': 'pt-16',
    '5rem': 'pt-20',
    '6rem': 'pt-24',
    '7rem': 'pt-28',
    '8rem': 'pt-32',
    '9rem': 'pt-36',
    '10rem': 'pt-40',
    '11rem': 'pt-44',
    '12rem': 'pt-48',
    '13rem': 'pt-52',
    '14rem': 'pt-56',
    '15em': 'pt-60',
    '16rem': 'pt-64',
    '18rem': 'pt-72',
    '20rem': 'pt-80',
    '24rem': 'pt-96',
  },
  'padding-bottom': {
    0: 'pb-0',
    '0px': 'pb-0',
    '1px': 'pb-px',
    '0.125rem': 'pb-0.5',
    '0.25rem': 'pb-1',
    '0.375rem': 'pb-1.5',
    '0.5rem': 'pb-2',
    '0.625rem': 'pb-2.5',
    '0.75rem': 'pb-3',
    '0.875rem': 'pb-3.5',
    '1rem': 'pb-4',
    '1.25rem': 'pb-5',
    '1.5rem': 'pb-6',
    '1.75rem': 'pb-7',
    '2rem': 'pb-8',
    '2.25rem': 'pb-9',
    '2.5rem': 'pb-10',
    '2.75rem': 'pb-11',
    '3rem': 'pb-12',
    '3.5rem': 'pb-14',
    '4rem': 'pb-16',
    '5rem': 'pb-20',
    '6rem': 'pb-24',
    '7rem': 'pb-28',
    '8rem': 'pb-32',
    '9rem': 'pb-36',
    '10rem': 'pb-40',
    '11rem': 'pb-44',
    '12rem': 'pb-48',
    '13rem': 'pb-52',
    '14rem': 'pb-56',
    '15em': 'pb-60',
    '16rem': 'pb-64',
    '18rem': 'pb-72',
    '20rem': 'pb-80',
    '24rem': 'pb-96',
  },
  overflow: {
    auto: 'overflow-auto',
    hidden: 'overflow-hidden',
    visible: 'overflow-visible',
    scroll: 'overflow-scroll',
  },
  'overflow-x': {
    auto: 'overflow-x-auto',
    hidden: 'overflow-x-hidden',
    visible: 'overflow-x-visible',
    scroll: 'overflow-x-scroll',
  },
  'overflow-y': {
    auto: 'overflow-y-auto',
    hidden: 'overflow-y-hidden',
    visible: 'overflow-y-visible',
    scroll: 'overflow-y-scroll',
  },
  'border-style': {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
    double: 'border-double',
    none: 'border-none',
  },
  opacity: {
    0: 'opacity-0',
    0.05: 'opacity-5',
    0.1: 'opacity-10',
    0.2: 'opacity-20',
    0.25: 'opacity-25',
    0.3: 'opacity-30',
    0.4: 'opacity-40',
    0.5: 'opacity-50',
    0.6: 'opacity-60',
    0.7: 'opacity-70',
    0.75: 'opacity-75',
    0.8: 'opacity-80',
    0.9: 'opacity-90',
    0.95: 'opacity-95',
    1: 'opacity-100',
  },
  float: {
    right: 'float-right',
    left: 'float-left',
    none: 'float-none',
  },
  clear: {
    left: 'clear-left',
    right: 'clear-right',
    both: 'clear-both',
    none: 'clear-none',
  },
  'object-fit': {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  },
  'text-decoration': {
    underline: 'underline',
    'line-through': 'line-through',
    none: 'no-underline',
  },
  'font-weight': {
    100: 'font-thin',
    200: 'font-extralight',
    300: 'font-light',
    400: 'font-normal',
    500: 'font-medium',
    600: 'font-semibold',
    700: 'font-bold',
    800: 'font-extrabold',
    900: 'font-black',
  },
  'line-height': {
    1: 'leading-none',
    1.25: 'leading-tight',
    1.375: 'leading-snug',
    1.5: 'leading-normal',
    1.625: 'leading-relaxed',
    2: 'leading-loose',
  },
  'flex-wrap': {
    wrap: 'flex-wrap',
    'wrap-reverse': 'flex-wrap-reverse',
    nowrap: 'flex-nowrap',
  },
  'flex-grow': {
    0: 'flex-grow-0',
    1: 'flex-grow',
  },
  'flex-shrink': {
    0: 'flex-shrink-0',
    1: 'flex-shrink',
  },
  'justify-content': {
    'flex-start': 'justify-start',
    'flex-end': 'justify-end',
    center: 'justify-center',
    'space-between': 'justify-between',
    'space-around': 'justify-around',
    'space-evenly': 'justify-evenly',
  },
  'align-items': {
    'flex-start': 'items-start',
    'flex-end': 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
  },
  'text-align': {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center',
    justify: 'text-justify',
  },
  'align-content': {
    center: 'content-center',
    'flex-start': 'content-start',
    'flex-end': 'content-end',
    'space-between': 'content-between',
    'space-around': 'content-around',
    'space-evenly': 'content-evenly',
  },
  'white-space': {
    normal: 'whitespace-normal',
    nowrap: 'whitespace-nowrap',
    pre: 'whitespace-pre',
    'pre-line': 'whitespace-pre-line',
    'pre-wrap': 'whitespace-pre-wrap',
  },
  margin: {
    0: 'm-0',
    '0px': 'm-0',
    '1px': 'm-px',
    '0.125rem': 'm-0.5',
    '0.25rem': 'm-1',
    '0.375rem': 'm-1.5',
    '0.5rem': 'm-2',
    '0.625rem': 'm-2.5',
    '0.75rem': 'm-3',
    '0.875rem': 'm-3.5',
    '1rem': 'm-4',
    '1.25rem': 'm-5',
    '1.5rem': 'm-6',
    '1.75rem': 'm-7',
    '2rem': 'm-8',
    '2.25rem': 'm-9',
    '2.5rem': 'm-10',
    '2.75rem': 'm-11',
    '3rem': 'm-12',
    '3.5rem': 'm-14',
    '4rem': 'm-16',
    '5rem': 'm-20',
    '6rem': 'm-24',
    '7rem': 'm-28',
    '8rem': 'm-32',
    '9rem': 'm-36',
    '10rem': 'm-40',
    '11rem': 'm-44',
    '12rem': 'm-48',
    '13rem': 'm-52',
    '14rem': 'm-56',
    '15em': 'm-60',
    '16rem': 'm-64',
    '18rem': 'm-72',
    '20rem': 'm-80',
    '24rem': 'm-96',
  },
  'margin-left': {
    0: 'ml-0',
    '0px': 'ml-0',
    '1px': 'ml-px',
    '0.125rem': 'ml-0.5',
    '0.25rem': 'ml-1',
    '0.375rem': 'ml-1.5',
    '0.5rem': 'ml-2',
    '0.625rem': 'ml-2.5',
    '0.75rem': 'ml-3',
    '0.875rem': 'ml-3.5',
    '1rem': 'ml-4',
    '1.25rem': 'ml-5',
    '1.5rem': 'ml-6',
    '1.75rem': 'ml-7',
    '2rem': 'ml-8',
    '2.25rem': 'ml-9',
    '2.5rem': 'ml-10',
    '2.75rem': 'ml-11',
    '3rem': 'ml-12',
    '3.5rem': 'ml-14',
    '4rem': 'ml-16',
    '5rem': 'ml-20',
    '6rem': 'ml-24',
    '7rem': 'ml-28',
    '8rem': 'ml-32',
    '9rem': 'ml-36',
    '10rem': 'ml-40',
    '11rem': 'ml-44',
    '12rem': 'ml-48',
    '13rem': 'ml-52',
    '14rem': 'ml-56',
    '15em': 'ml-60',
    '16rem': 'ml-64',
    '18rem': 'ml-72',
    '20rem': 'ml-80',
    '24rem': 'ml-96',
  },
  'margin-right': {
    0: 'mr-0',
    '0px': 'mr-0',
    '1px': 'mr-px',
    '0.125rem': 'mr-0.5',
    '0.25rem': 'mr-1',
    '0.375rem': 'mr-1.5',
    '0.5rem': 'mr-2',
    '0.625rem': 'mr-2.5',
    '0.75rem': 'mr-3',
    '0.875rem': 'mr-3.5',
    '1rem': 'mr-4',
    '1.25rem': 'mr-5',
    '1.5rem': 'mr-6',
    '1.75rem': 'mr-7',
    '2rem': 'mr-8',
    '2.25rem': 'mr-9',
    '2.5rem': 'mr-10',
    '2.75rem': 'mr-11',
    '3rem': 'mr-12',
    '3.5rem': 'mr-14',
    '4rem': 'mr-16',
    '5rem': 'mr-20',
    '6rem': 'mr-24',
    '7rem': 'mr-28',
    '8rem': 'mr-32',
    '9rem': 'mr-36',
    '10rem': 'mr-40',
    '11rem': 'mr-44',
    '12rem': 'mr-48',
    '13rem': 'mr-52',
    '14rem': 'mr-56',
    '15em': 'mr-60',
    '16rem': 'mr-64',
    '18rem': 'mr-72',
    '20rem': 'mr-80',
    '24rem': 'mr-96',
  },
  'margin-top': {
    0: 'mt-0',
    '0px': 'mt-0',
    '1px': 'mt-px',
    '0.125rem': 'mt-0.5',
    '0.25rem': 'mt-1',
    '0.375rem': 'mt-1.5',
    '0.5rem': 'mt-2',
    '0.625rem': 'mt-2.5',
    '0.75rem': 'mt-3',
    '0.875rem': 'mt-3.5',
    '1rem': 'mt-4',
    '1.25rem': 'mt-5',
    '1.5rem': 'mt-6',
    '1.75rem': 'mt-7',
    '2rem': 'mt-8',
    '2.25rem': 'mt-9',
    '2.5rem': 'mt-10',
    '2.75rem': 'mt-11',
    '3rem': 'mt-12',
    '3.5rem': 'mt-14',
    '4rem': 'mt-16',
    '5rem': 'mt-20',
    '6rem': 'mt-24',
    '7rem': 'mt-28',
    '8rem': 'mt-32',
    '9rem': 'mt-36',
    '10rem': 'mt-40',
    '11rem': 'mt-44',
    '12rem': 'mt-48',
    '13rem': 'mt-52',
    '14rem': 'mt-56',
    '15em': 'mt-60',
    '16rem': 'mt-64',
    '18rem': 'mt-72',
    '20rem': 'mt-80',
    '24rem': 'mt-96',
  },
  'margin-bottom': {
    0: 'mb-0',
    '0px': 'mb-0',
    '1px': 'mb-px',
    '0.125rem': 'mb-0.5',
    '0.25rem': 'mb-1',
    '0.375rem': 'mb-1.5',
    '0.5rem': 'mb-2',
    '0.625rem': 'mb-2.5',
    '0.75rem': 'mb-3',
    '0.875rem': 'mb-3.5',
    '1rem': 'mb-4',
    '1.25rem': 'mb-5',
    '1.5rem': 'mb-6',
    '1.75rem': 'mb-7',
    '2rem': 'mb-8',
    '2.25rem': 'mb-9',
    '2.5rem': 'mb-10',
    '2.75rem': 'mb-11',
    '3rem': 'mb-12',
    '3.5rem': 'mb-14',
    '4rem': 'mb-16',
    '5rem': 'mb-20',
    '6rem': 'mb-24',
    '7rem': 'mb-28',
    '8rem': 'mb-32',
    '9rem': 'mb-36',
    '10rem': 'mb-40',
    '11rem': 'mb-44',
    '12rem': 'mb-48',
    '13rem': 'mb-52',
    '14rem': 'mb-56',
    '15em': 'mb-60',
    '16rem': 'mb-64',
    '18rem': 'mb-72',
    '20rem': 'mb-80',
    '24rem': 'mb-96',
  },
  'overscroll-behavior': {
    auto: 'overscroll-auto',
    contain: 'overscroll-contain',
    none: 'overscroll-none',
  },
  'overscroll-behaviory': {
    auto: 'overscroll-y-auto',
    contain: 'overscroll-y-contain',
    none: 'overscroll-y-none',
  },
  'overscroll-behavior-x': {
    auto: 'overscroll-x-auto',
    contain: 'overscroll-x-contain',
    none: 'overscroll-x-none',
  },
  visibility: {
    visible: 'visible',
    hidden: 'invisible',
  },
  'z-index': {
    0: 'z-0',
    10: 'z-10',
    20: 'z-20',
    30: 'z-30',
    40: 'z-40',
    50: 'z-50',
    auto: 'z-auto',
  },
  'flex-direction': {
    row: 'flex-row',
    'row-reverse': 'flex-row-reverse',
    column: 'flex-col',
    'column-reverse': 'flex-col-reverse',
  },
  flex: {
    '1 1 0%': 'flex-1',
    '1 1 auto': 'flex-auto',
    '0 1 auto': 'flex-initial',
    none: 'flex-none',
  },
  order: {
    1: 'order-1',
    2: 'order-2',
    3: 'order-3',
    4: 'order-4',
    5: 'order-5',
    6: 'order-6',
    7: 'order-7',
    8: 'order-8',
    9: 'order-9',
    10: 'order-10',
    11: 'order-11',
    12: 'order-12',
    '-9999': 'order-first',
    9999: 'order-last',
    0: 'order-none',
  },
  'grid-template-columns': {
    'repeat(1, minmax(0, 1fr))': 'grid-cols-1',
    'repeat(2, minmax(0, 1fr))': 'grid-cols-2',
    'repeat(3, minmax(0, 1fr))': 'grid-cols-3',
    'repeat(4, minmax(0, 1fr))': 'grid-cols-4',
    'repeat(5, minmax(0, 1fr))': 'grid-cols-5',
    'repeat(6, minmax(0, 1fr))': 'grid-cols-6',
    'repeat(7, minmax(0, 1fr))': 'grid-cols-7',
    'repeat(8, minmax(0, 1fr))': 'grid-cols-8',
    'repeat(9, minmax(0, 1fr))': 'grid-cols-9',
    'repeat(10, minmax(0, 1fr))': 'grid-cols-10',
    'repeat(11, minmax(0, 1fr))': 'grid-cols-11',
    'repeat(12, minmax(0, 1fr))': 'grid-cols-12',
    none: 'grid-cols-none',
  },
  'grid-auto-flow': {
    row: 'grid-flow-row',
    column: 'grid-flow-col',
    'row dense': 'grid-flow-row-dense',
    'column dense': 'grid-flow-col-dense',
  },
  'grid-auto-columns': {
    auto: 'auto-cols-auto',
    'min-content': 'auto-cols-min',
    'max-content': 'auto-cols-max',
    'minmax(0, 1fr)': 'auto-cols-fr',
  },
  'grid-auto-rows': {
    auto: 'auto-rows-auto',
    'min-content': 'auto-rows-min',
    'max-content': 'auto-rows-max',
    'minmax(0, 1fr)': 'auto-rows-fr',
  },
  'box-sizing': {
    'border-box': 'box-border',
    'content-box': 'box-content',
  },
  isolation: {
    isolate: 'isolate',
    auto: 'isolation-auto',
  },
  'object-position': {
    bottom: 'object-bottom',
    center: 'object-center',
    left: 'object-left',
    'left bottom': 'object-left-bottom',
    'left top': 'object-left-top',
    right: 'object-right',
    'right bottom': 'object-right-bottom',
    'right top': 'object-right-top',
    top: 'object-top',
  },
  width: {
    0: 'w-0',
    '0px': 'w-0',
    auto: 'w-auto',
    '25%': 'w-1/4',
    '33.333333%': 'w-1/3',
    '50%': 'w-1/2',
    '66.666667%': 'w-2/3',
    '75%': 'w-3/4',
    '100%': 'w-full',
    '100vw': 'w-screen',
    'min-content': 'w-min',
    'max-content': 'w-max',
  },
  'min-width': {
    '0px': 'min-w-0',
    '100%': 'min-w-full',
    'min-content': 'min-w-min',
    'max-content': 'min-w-max',
  },
  'max-width': {
    '0rem': 'max-w-0',
    none: 'max-w-none',
    '20rem': 'max-w-xs',
    '24rem': 'max-w-sm',
    '28rem': 'max-w-md',
    '32rem': 'max-w-lg',
    '36rem': 'max-w-xl',
    '42rem': 'max-w-2xl',
    '48rem': 'max-w-3xl',
    '56rem': 'max-w-4xl',
    '64rem': 'max-w-5xl',
    '72rem': 'max-w-6xl',
    '80rem': 'max-w-7xl',
    '100%': 'max-w-full',
    'min-content': 'max-w-min',
    'max-content': 'max-w-max',
    '65ch': 'max-w-prose',
    '640px': 'max-w-screen-sm',
    '768px': 'max-w-screen-md',
    '1024px': 'max-w-screen-lg',
    '1280px': 'max-w-screen-xl',
    '1536px': 'max-w-screen-2xl',
  },
  height: {
    0: 'h-0',
    '0px': 'h-0',
    auto: 'h-auto',
    '25%': 'h-1/4',
    '33.333333%': 'h-1/3',
    '50%': 'h-1/2',
    '66.666667%': 'h-2/3',
    '75%': 'h-3/4',
    '100%': 'h-full',
    '100vh': 'h-screen',
  },
  'min-height': {
    '0px': 'min-h-0',
    '100%': 'min-h-full',
    '100vh': 'min-h-screen',
  },
  'max-height': {
    '0px': 'max-h-0',
    '100%': 'max-h-full',
    '100vh': 'max-h-screen',
  },
  'font-style': {
    italic: 'italic',
    normal: 'non-italic',
  },
  'list-style-type': {
    none: 'list-none',
    disc: 'list-disc',
    decimal: 'list-decimal',
  },
  'list-style-position': {
    inside: 'list-inside',
    outside: 'list-outside',
  },
  color: {
    transparent: 'text-transparent',
    currentColor: 'text-current',
    '#fff': 'text-white',
    '#ffffff': 'text-white',
    '#FFF': 'text-white',
    '#FFFFFF': 'text-white',
    white: 'text-white',
  },
  'text-transform': {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    none: 'normal-case',
  },
  'text-overflow': {
    ellipsis: 'overflow-ellipsis',
    clip: 'overflow-clip',
  },
  'vertical-align': {
    baseline: 'align-baseline',
    top: 'align-top',
    middle: 'align-middle',
    bottom: 'align-bottom',
    'text-top': 'align-text-top',
    'text-bottom': 'align-text-bottom',
  },
  'word-break': {
    'break-all': 'break-all',
  },
  'overflow-wrap': {
    'break-word': 'break-words',
  },
  'background-attachment': {
    fixed: 'bg-fixed',
    local: 'bg-local',
    scroll: 'bg-scroll',
  },
  'background-clip': {
    'border-box': 'bg-clip-border',
    'padding-box': 'bg-clip-padding',
    'content-box': 'bg-clip-content',
    text: 'bg-clip-text',
  },
  'background-color': {
    transparent: 'bg-transparent',
    currentColor: 'bg-current',
  },
  'background-position': {
    bottom: 'bg-bottom',
    center: 'bg-center',
    left: 'bg-left',
    'left bottom': 'bg-left-bottom',
    'left-top': 'bg-left-top',
    right: 'bg-right',
    'right bottom': 'bg-right-bottom',
    'right top': 'bg-right-top',
    top: 'bg-top',
  },
  'background-repeat': {
    repeat: 'bg-repeat',
    'no-repeat': 'bg-no-repeat',
    'repeat-x': 'bg-repeat-x',
    'repeat-y': 'bg-repeat-y',
    round: 'bg-repeat-round',
    space: 'bg-repeat-space',
  },
  'background-size': {
    auto: 'bg-auto',
    cover: 'bg-cover',
    contain: 'bg-contain',
  },
  'background-image': {
    none: 'bg-none',
  },
  'border-radius': {
    0: 'rounded-none',
    '0px': 'rounded-none',
    '.125rem': 'rounded-sm',
    '.25rem': 'rounded',
    '.375rem': 'rounded-md',
    '.5rem': 'rounded-lg',
    '.75rem': 'rounded-xl',
    '1rem': 'rounded-2xl',
    '1.5rem': 'rounded-3xl',
    '9999px': 'rounded-full',
  },
  'border-width': {
    '0px': 'border-none',
    '2px': 'border-2',
    '4px': 'border-4',
    '8px': 'border-8',
    '1px': 'border',
  },
  'border-color': {
    transparent: 'border-transparent',
    currentColor: 'border-current',
  },
  'mix-blend-mode': {
    normal: 'mix-blend-normal',
    multiply: 'mix-blend-multiply',
    screen: 'mix-blend-screen',
    overlay: 'mix-blend-overlay',
    darken: 'mix-blend-darken',
    lighten: 'mix-blend-lighten',
    'color-dodge': 'mix-blend-color-dodge',
    'color-burn': 'mix-blend-color-burn',
    'hard-light': 'mix-blend-hard-light',
    'soft-light': 'mix-blend-soft-light',
    difference: 'mix-blend-difference',
    exclusion: 'mix-blend-exclusion',
    hue: 'mix-blend-hue',
    saturation: 'mix-blend-saturation',
    color: 'mix-blend-color',
    luminosity: 'mix-blend-luminosity',
  },
  'background-blend-mode': {
    normal: 'bg-blend-normal',
    multiply: 'bg-blend-multiply',
    screen: 'bg-blend-screen',
    overlay: 'bg-blend-overlay',
    darken: 'bg-blend-darken',
    lighten: 'bg-blend-lighten',
    'color-dodge': 'bg-blend-color-dodge',
    'color-burn': 'bg-blend-color-burn',
    'hard-light': 'bg-blend-hard-light',
    'soft-light': 'bg-blend-soft-light',
    difference: 'bg-blend-difference',
    exclusion: 'bg-blend-exclusion',
    hue: 'bg-blend-hue',
    saturation: 'bg-blend-saturation',
    color: 'bg-blend-color',
    luminosity: 'bg-blend-luminosity',
  },
  'border-collapse': {
    collapse: 'border-collapse',
    separate: 'border-separate',
  },
  'table-layout': {
    auto: 'table-auto',
    fixed: 'table-fixed',
  },
  'transform-origin': {
    center: 'origin-center',
    top: 'origin-top',
    'top right': 'origin-top-right',
    right: 'origin-right',
    'bottom right': 'origin-bottom-right',
    bottom: 'origin-bottom',
    'bottom left': 'origin-bottom-left',
    left: 'origin-left',
    'top left': 'origin-top-left',
  },
  appearance: {
    none: 'appearance-none',
  },
  cursor: {
    auto: 'cursor-auto',
    default: 'cursor-default',
    pointer: 'cursor-pointer',
    wait: 'cursor-wait',
    text: 'cursor-text',
    move: 'cursor-move',
    help: 'cursor-help',
    'not-allowed': 'cursor-not-allowed',
  },
  'pointer-events': {
    none: 'pointer-events-none',
    auto: 'pointer-events-auto',
  },
  resize: {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize',
  },
  'user-select': {
    none: 'select-none',
    text: 'select-text',
    all: 'select-all',
    auto: 'select-auto',
  },
  fill: {
    currentColor: 'fill-current',
  },
  stroke: {
    currentColor: 'stroke-current',
  },
  'stroke-width': {
    0: 'stroke-0',
    1: 'stroke-1',
    2: 'stroke-2',
  },
  position: {
    static: 'static',
    fixed: 'fixed',
    absolute: 'absolute',
    relative: 'relative',
    sticky: 'sticky',
  },
  'justify-items': {
    start: 'justify-items-start',
    end: 'justify-items-end',
    center: 'justify-items-center',
    stretch: 'justify-items-stretch',
  },
  'justify-self': {
    auto: 'justify-self-auto',
    start: 'justify-self-start',
    end: 'justify-self-end',
    center: 'justify-self-center',
    stretch: 'justify-self-stretch',
  },
  'align-self': {
    auto: 'self-auto',
    start: 'self-start',
    end: 'self-end',
    center: 'self-center',
    stretch: 'self-stretch',
  },
  'place-content': {
    center: 'place-content-center',
    start: 'place-content-start',
    end: 'place-content-end',
    'space-between': 'place-content-between',
    'space-around': 'place-content-around',
    'space-evenly': 'place-content-evenly',
    stretch: 'place-content-stretch',
  },
  'place-items': {
    start: 'place-items-start',
    end: 'place-items-end',
    center: 'place-items-center',
    stretch: 'place-items-stretch',
  },
  'place-self': {
    auto: 'place-self-auto',
    start: 'place-self-start',
    end: 'place-self-end',
    center: 'place-self-center',
    stretch: 'place-self-stretch',
  },
  top: {
    0: 'top-0',
    '0px': 'top-0',
    '50%': 'top-1/2',
    '100%': 'top-full',
  },
  bottom: {
    0: 'bottom-0',
    '0px': 'bottom-0',
    '50%': 'bottom-1/2',
    '100%': 'bottom-full',
  },
  left: {
    0: 'left-0',
    '0px': 'left-0',
    '50%': 'left-1/2',
    '100%': 'left-full',
  },
  right: {
    0: 'right-0',
    '0px': 'right-0',
    '50%': 'right-1/2',
    '100%': 'right-full',
  },
  'font-size': {
    '.75rem': 'text-xs',
    '.875rem': 'text-sm',
    '1rem': 'text-base',
    '1.125rem': 'text-lg',
    '1.25rem': 'text-xl',
    '1.5rem': 'text-2xl',
    '1.875rem': 'text-3xl',
    '2.25rem': 'text-4xl',
    '3rem': 'text-5xl',
    '3.75rem': 'text-6xl',
    '4.5rem': 'text-7xl',
    '6rem': 'text-8xl',
    '8rem': 'text-9xl',
  },
};

module.exports = {
  TAILWIND_CLASSES,
};
