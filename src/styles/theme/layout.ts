import { css } from "styled-components";

const layout = css`
  .hidden-overflowX {
    overflow-x: hidden;
  }

  .auto-overflowX {
    overflow-x: auto;
  }

  .hidden-overflowY {
    overflow-y: hidden;
  }

  .auto-overflowY {
    overflow-y: auto;
  }

  .hidden-overflow {
    overflow: hidden;
  }

  .auto-overflow {
    overflow: auto;
  }

  .block {
    display: block;
  }

  .inline-block {
    display: inline-block;
  }

  .inline {
    display: inline;
  }

  .flex {
    display: flex;
  }

  .inline-flex {
    display: inline-flex;
  }

  .hidden {
    display: none;
  }

  .flex-row {
    flex-direction: row;
  }

  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-col-reverse {
    flex-direction: column-reverse;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  .flex-no-wrap {
    flex-wrap: nowrap;
  }

  .items-start {
    align-items: flex-start;
  }

  .items-end {
    align-items: flex-end;
  }

  .items-center {
    align-items: center;
  }

  .items-baseline {
    align-items: baseline;
  }

  .items-stretch {
    align-items: stretch;
  }

  .self-auto {
    align-self: auto;
  }

  .self-start {
    align-self: flex-start;
  }

  .self-end {
    align-self: flex-end;
  }

  .self-center {
    align-self: center;
  }

  .self-stretch {
    align-self: stretch;
  }

  .justify-start {
    justify-content: flex-start;
  }

  .justify-end {
    justify-content: flex-end;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-around {
    justify-content: space-around;
  }

  .justify-evenly {
    justify-content: space-evenly;
  }

  .content-center {
    align-content: center;
  }

  .content-start {
    align-content: flex-start;
  }

  .content-end {
    align-content: flex-end;
  }

  .content-between {
    align-content: space-between;
  }

  .content-around {
    align-content: space-around;
  }

  .flex-1 {
    flex: 1 1 0%;
  }

  .flex-auto {
    flex: 1 1 auto;
  }

  .flex-initial {
    flex: 0 1 auto;
  }

  .flex-none {
    flex: none;
  }

  .flex-grow-0 {
    flex-grow: 0;
  }

  .flex-grow {
    flex-grow: 1;
  }

  .flex-grow-2 {
    flex-grow: 2;
  }

  .flex-grow-3 {
    flex-grow: 3;
  }

  .flex-grow-4 {
    flex-grow: 4;
  }

  .flex-grow-5 {
    flex-grow: 5;
  }

  .flex-shrink-0 {
    flex-shrink: 0;
  }

  .flex-shrink {
    flex-shrink: 1;
  }

  .flex-shrink-2 {
    flex-shrink: 2;
  }

  .flex-shrink-3 {
    flex-shrink: 3;
  }

  .flex-shrink-4 {
    flex-shrink: 4;
  }

  .flex-shrink-5 {
    flex-shrink: 5;
  }

  .order-1 {
    order: 1;
  }

  .order-2 {
    order: 2;
  }

  .order-3 {
    order: 3;
  }

  .order-4 {
    order: 4;
  }

  .order-5 {
    order: 5;
  }

  .order-6 {
    order: 6;
  }

  .order-7 {
    order: 7;
  }

  .order-8 {
    order: 8;
  }

  .order-9 {
    order: 9;
  }

  .order-10 {
    order: 10;
  }

  .order-11 {
    order: 11;
  }

  .order-12 {
    order: 12;
  }

  .order-first {
    order: -9999;
  }

  .order-last {
    order: 9999;
  }

  .order-none {
    order: 0;
  }

  .float-right {
    float: right;
  }

  .float-left {
    float: left;
  }

  .float-none {
    float: none;
  }

  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }

  .clear-left {
    clear: left;
  }

  .clear-right {
    clear: right;
  }

  .clear-both {
    clear: both;
  }

  .gap-0 {
    gap: 0;
  }

  .gap-1 {
    gap: 0.25rem;
  }

  .gap-2 {
    gap: 0.5rem;
  }

  .gap-3 {
    gap: 0.75rem;
  }

  .gap-4 {
    gap: 1rem;
  }

  .gap-5 {
    gap: 1.25rem;
  }

  .gap-6 {
    gap: 1.5rem;
  }

  .gap-8 {
    gap: 2rem;
  }

  .gap-10 {
    gap: 2.5rem;
  }

  .gap-12 {
    gap: 3rem;
  }

  .gap-16 {
    gap: 4rem;
  }

  .gap-20 {
    gap: 5rem;
  }

  .gap-24 {
    gap: 6rem;
  }

  .gap-32 {
    gap: 8rem;
  }

  .gap-40 {
    gap: 10rem;
  }

  .gap-48 {
    gap: 12rem;
  }

  .gap-56 {
    gap: 14rem;
  }

  .gap-64 {
    gap: 16rem;
  }

  .gap-px {
    gap: 1px;
  }

  .center-v {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 640px) {
    .sm_block {
      display: block;
    }

    .sm_inline-block {
      display: inline-block;
    }

    .sm_inline {
      display: inline;
    }

    .sm_flex {
      display: flex;
    }

    .sm_inline-flex {
      display: inline-flex;
    }

    .sm_hidden {
      display: none;
    }

    .sm_flex-row {
      flex-direction: row;
    }

    .sm_flex-row-reverse {
      flex-direction: row-reverse;
    }

    .sm_flex-col {
      flex-direction: column;
    }

    .sm_flex-col-reverse {
      flex-direction: column-reverse;
    }

    .sm_flex-wrap {
      flex-wrap: wrap;
    }

    .sm_flex-wrap-reverse {
      flex-wrap: wrap-reverse;
    }

    .sm_flex-no-wrap {
      flex-wrap: nowrap;
    }

    .sm_items-start {
      align-items: flex-start;
    }

    .sm_items-end {
      align-items: flex-end;
    }

    .sm_items-center {
      align-items: center;
    }

    .sm_items-baseline {
      align-items: baseline;
    }

    .sm_items-stretch {
      align-items: stretch;
    }

    .sm_self-auto {
      align-self: auto;
    }

    .sm_self-start {
      align-self: flex-start;
    }

    .sm_self-end {
      align-self: flex-end;
    }

    .sm_self-center {
      align-self: center;
    }

    .sm_self-stretch {
      align-self: stretch;
    }

    .sm_justify-start {
      justify-content: flex-start;
    }

    .sm_justify-end {
      justify-content: flex-end;
    }

    .sm_justify-center {
      justify-content: center;
    }

    .sm_justify-between {
      justify-content: space-between;
    }

    .sm_justify-around {
      justify-content: space-around;
    }

    .sm_justify-evenly {
      justify-content: space-evenly;
    }

    .sm_content-center {
      align-content: center;
    }

    .sm_content-start {
      align-content: flex-start;
    }

    .sm_content-end {
      align-content: flex-end;
    }

    .sm_content-between {
      align-content: space-between;
    }

    .sm_content-around {
      align-content: space-around;
    }

    .sm_flex-1 {
      flex: 1 1 0%;
    }

    .sm_flex-auto {
      flex: 1 1 auto;
    }

    .sm_flex-initial {
      flex: 0 1 auto;
    }

    .sm_flex-none {
      flex: none;
    }

    .sm_flex-grow-0 {
      flex-grow: 0;
    }

    .sm_flex-grow {
      flex-grow: 1;
    }

    .sm_flex-grow-2 {
      flex-grow: 2;
    }

    .sm_flex-grow-3 {
      flex-grow: 3;
    }

    .sm_flex-grow-4 {
      flex-grow: 4;
    }

    .sm_flex-grow-5 {
      flex-grow: 5;
    }

    .sm_flex-shrink-0 {
      flex-shrink: 0;
    }

    .sm_flex-shrink {
      flex-shrink: 1;
    }

    .sm_flex-shrink-2 {
      flex-shrink: 2;
    }

    .sm_flex-shrink-3 {
      flex-shrink: 3;
    }

    .sm_flex-shrink-4 {
      flex-shrink: 4;
    }

    .sm_flex-shrink-5 {
      flex-shrink: 5;
    }

    .sm_order-1 {
      order: 1;
    }

    .sm_order-2 {
      order: 2;
    }

    .sm_order-3 {
      order: 3;
    }

    .sm_order-4 {
      order: 4;
    }

    .sm_order-5 {
      order: 5;
    }

    .sm_order-6 {
      order: 6;
    }

    .sm_order-7 {
      order: 7;
    }

    .sm_order-8 {
      order: 8;
    }

    .sm_order-9 {
      order: 9;
    }

    .sm_order-10 {
      order: 10;
    }

    .sm_order-11 {
      order: 11;
    }

    .sm_order-12 {
      order: 12;
    }

    .sm_order-first {
      order: -9999;
    }

    .sm_order-last {
      order: 9999;
    }

    .sm_order-none {
      order: 0;
    }

    .sm_float-right {
      float: right;
    }

    .sm_float-left {
      float: left;
    }

    .sm_float-none {
      float: none;
    }

    .sm_clearfix:after {
      content: "";
      display: table;
      clear: both;
    }

    .sm_clear-left {
      clear: left;
    }

    .sm_clear-right {
      clear: right;
    }

    .sm_clear-both {
      clear: both;
    }

    .sm_gap-0 {
      gap: 0;
    }

    .sm_gap-1 {
      gap: 0.25rem;
    }

    .sm_gap-2 {
      gap: 0.5rem;
    }

    .sm_gap-3 {
      gap: 0.75rem;
    }

    .sm_gap-4 {
      gap: 1rem;
    }

    .sm_gap-5 {
      gap: 1.25rem;
    }

    .sm_gap-6 {
      gap: 1.5rem;
    }

    .sm_gap-8 {
      gap: 2rem;
    }

    .sm_gap-10 {
      gap: 2.5rem;
    }

    .sm_gap-12 {
      gap: 3rem;
    }

    .sm_gap-16 {
      gap: 4rem;
    }

    .sm_gap-20 {
      gap: 5rem;
    }

    .sm_gap-24 {
      gap: 6rem;
    }

    .sm_gap-32 {
      gap: 8rem;
    }

    .sm_gap-40 {
      gap: 10rem;
    }

    .sm_gap-48 {
      gap: 12rem;
    }

    .sm_gap-56 {
      gap: 14rem;
    }

    .sm_gap-64 {
      gap: 16rem;
    }

    .sm_gap-px {
      gap: 1px;
    }

    .sm_center-v {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  @media (min-width: 768px) {
    .md_block {
      display: block;
    }

    .md_inline-block {
      display: inline-block;
    }

    .md_inline {
      display: inline;
    }

    .md_flex {
      display: flex;
    }

    .md_inline-flex {
      display: inline-flex;
    }

    .md_hidden {
      display: none;
    }

    .md_flex-row {
      flex-direction: row;
    }

    .md_flex-row-reverse {
      flex-direction: row-reverse;
    }

    .md_flex-col {
      flex-direction: column;
    }

    .md_flex-col-reverse {
      flex-direction: column-reverse;
    }

    .md_flex-wrap {
      flex-wrap: wrap;
    }

    .md_flex-wrap-reverse {
      flex-wrap: wrap-reverse;
    }

    .md_flex-no-wrap {
      flex-wrap: nowrap;
    }

    .md_items-start {
      align-items: flex-start;
    }

    .md_items-end {
      align-items: flex-end;
    }

    .md_items-center {
      align-items: center;
    }

    .md_items-baseline {
      align-items: baseline;
    }

    .md_items-stretch {
      align-items: stretch;
    }

    .md_self-auto {
      align-self: auto;
    }

    .md_self-start {
      align-self: flex-start;
    }

    .md_self-end {
      align-self: flex-end;
    }

    .md_self-center {
      align-self: center;
    }

    .md_self-stretch {
      align-self: stretch;
    }

    .md_justify-start {
      justify-content: flex-start;
    }

    .md_justify-end {
      justify-content: flex-end;
    }

    .md_justify-center {
      justify-content: center;
    }

    .md_justify-between {
      justify-content: space-between;
    }

    .md_justify-around {
      justify-content: space-around;
    }

    .md_justify-evenly {
      justify-content: space-evenly;
    }

    .md_content-center {
      align-content: center;
    }

    .md_content-start {
      align-content: flex-start;
    }

    .md_content-end {
      align-content: flex-end;
    }

    .md_content-between {
      align-content: space-between;
    }

    .md_content-around {
      align-content: space-around;
    }

    .md_flex-1 {
      flex: 1 1 0%;
    }

    .md_flex-auto {
      flex: 1 1 auto;
    }

    .md_flex-initial {
      flex: 0 1 auto;
    }

    .md_flex-none {
      flex: none;
    }

    .md_flex-grow-0 {
      flex-grow: 0;
    }

    .md_flex-grow {
      flex-grow: 1;
    }

    .md_flex-grow-2 {
      flex-grow: 2;
    }

    .md_flex-grow-3 {
      flex-grow: 3;
    }

    .md_flex-grow-4 {
      flex-grow: 4;
    }

    .md_flex-grow-5 {
      flex-grow: 5;
    }

    .md_flex-shrink-0 {
      flex-shrink: 0;
    }

    .md_flex-shrink {
      flex-shrink: 1;
    }

    .md_flex-shrink-2 {
      flex-shrink: 2;
    }

    .md_flex-shrink-3 {
      flex-shrink: 3;
    }

    .md_flex-shrink-4 {
      flex-shrink: 4;
    }

    .md_flex-shrink-5 {
      flex-shrink: 5;
    }

    .md_order-1 {
      order: 1;
    }

    .md_order-2 {
      order: 2;
    }

    .md_order-3 {
      order: 3;
    }

    .md_order-4 {
      order: 4;
    }

    .md_order-5 {
      order: 5;
    }

    .md_order-6 {
      order: 6;
    }

    .md_order-7 {
      order: 7;
    }

    .md_order-8 {
      order: 8;
    }

    .md_order-9 {
      order: 9;
    }

    .md_order-10 {
      order: 10;
    }

    .md_order-11 {
      order: 11;
    }

    .md_order-12 {
      order: 12;
    }

    .md_order-first {
      order: -9999;
    }

    .md_order-last {
      order: 9999;
    }

    .md_order-none {
      order: 0;
    }

    .md_float-right {
      float: right;
    }

    .md_float-left {
      float: left;
    }

    .md_float-none {
      float: none;
    }

    .md_clearfix:after {
      content: "";
      display: table;
      clear: both;
    }

    .md_clear-left {
      clear: left;
    }

    .md_clear-right {
      clear: right;
    }

    .md_clear-both {
      clear: both;
    }

    .md_gap-0 {
      gap: 0;
    }

    .md_gap-1 {
      gap: 0.25rem;
    }

    .md_gap-2 {
      gap: 0.5rem;
    }

    .md_gap-3 {
      gap: 0.75rem;
    }

    .md_gap-4 {
      gap: 1rem;
    }

    .md_gap-5 {
      gap: 1.25rem;
    }

    .md_gap-6 {
      gap: 1.5rem;
    }

    .md_gap-8 {
      gap: 2rem;
    }

    .md_gap-10 {
      gap: 2.5rem;
    }

    .md_gap-12 {
      gap: 3rem;
    }

    .md_gap-16 {
      gap: 4rem;
    }

    .md_gap-20 {
      gap: 5rem;
    }

    .md_gap-24 {
      gap: 6rem;
    }

    .md_gap-32 {
      gap: 8rem;
    }

    .md_gap-40 {
      gap: 10rem;
    }

    .md_gap-48 {
      gap: 12rem;
    }

    .md_gap-56 {
      gap: 14rem;
    }

    .md_gap-64 {
      gap: 16rem;
    }

    .md_gap-px {
      gap: 1px;
    }

    .md_center-v {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  @media (min-width: 1024px) {
    .lg_block {
      display: block;
    }

    .lg_inline-block {
      display: inline-block;
    }

    .lg_inline {
      display: inline;
    }

    .lg_flex {
      display: flex;
    }

    .lg_inline-flex {
      display: inline-flex;
    }

    .lg_hidden {
      display: none;
    }

    .lg_flex-row {
      flex-direction: row;
    }

    .lg_flex-row-reverse {
      flex-direction: row-reverse;
    }

    .lg_flex-col {
      flex-direction: column;
    }

    .lg_flex-col-reverse {
      flex-direction: column-reverse;
    }

    .lg_flex-wrap {
      flex-wrap: wrap;
    }

    .lg_flex-wrap-reverse {
      flex-wrap: wrap-reverse;
    }

    .lg_flex-no-wrap {
      flex-wrap: nowrap;
    }

    .lg_items-start {
      align-items: flex-start;
    }

    .lg_items-end {
      align-items: flex-end;
    }

    .lg_items-center {
      align-items: center;
    }

    .lg_items-baseline {
      align-items: baseline;
    }

    .lg_items-stretch {
      align-items: stretch;
    }

    .lg_self-auto {
      align-self: auto;
    }

    .lg_self-start {
      align-self: flex-start;
    }

    .lg_self-end {
      align-self: flex-end;
    }

    .lg_self-center {
      align-self: center;
    }

    .lg_self-stretch {
      align-self: stretch;
    }

    .lg_justify-start {
      justify-content: flex-start;
    }

    .lg_justify-end {
      justify-content: flex-end;
    }

    .lg_justify-center {
      justify-content: center;
    }

    .lg_justify-between {
      justify-content: space-between;
    }

    .lg_justify-around {
      justify-content: space-around;
    }

    .lg_justify-evenly {
      justify-content: space-evenly;
    }

    .lg_content-center {
      align-content: center;
    }

    .lg_content-start {
      align-content: flex-start;
    }

    .lg_content-end {
      align-content: flex-end;
    }

    .lg_content-between {
      align-content: space-between;
    }

    .lg_content-around {
      align-content: space-around;
    }

    .lg_flex-1 {
      flex: 1 1 0%;
    }

    .lg_flex-auto {
      flex: 1 1 auto;
    }

    .lg_flex-initial {
      flex: 0 1 auto;
    }

    .lg_flex-none {
      flex: none;
    }

    .lg_flex-grow-0 {
      flex-grow: 0;
    }

    .lg_flex-grow {
      flex-grow: 1;
    }

    .lg_flex-grow-2 {
      flex-grow: 2;
    }

    .lg_flex-grow-3 {
      flex-grow: 3;
    }

    .lg_flex-grow-4 {
      flex-grow: 4;
    }

    .lg_flex-grow-5 {
      flex-grow: 5;
    }

    .lg_flex-shrink-0 {
      flex-shrink: 0;
    }

    .lg_flex-shrink {
      flex-shrink: 1;
    }

    .lg_flex-shrink-2 {
      flex-shrink: 2;
    }

    .lg_flex-shrink-3 {
      flex-shrink: 3;
    }

    .lg_flex-shrink-4 {
      flex-shrink: 4;
    }

    .lg_flex-shrink-5 {
      flex-shrink: 5;
    }

    .lg_order-1 {
      order: 1;
    }

    .lg_order-2 {
      order: 2;
    }

    .lg_order-3 {
      order: 3;
    }

    .lg_order-4 {
      order: 4;
    }

    .lg_order-5 {
      order: 5;
    }

    .lg_order-6 {
      order: 6;
    }

    .lg_order-7 {
      order: 7;
    }

    .lg_order-8 {
      order: 8;
    }

    .lg_order-9 {
      order: 9;
    }

    .lg_order-10 {
      order: 10;
    }

    .lg_order-11 {
      order: 11;
    }

    .lg_order-12 {
      order: 12;
    }

    .lg_order-first {
      order: -9999;
    }

    .lg_order-last {
      order: 9999;
    }

    .lg_order-none {
      order: 0;
    }

    .lg_float-right {
      float: right;
    }

    .lg_float-left {
      float: left;
    }

    .lg_float-none {
      float: none;
    }

    .lg_clearfix:after {
      content: "";
      display: table;
      clear: both;
    }

    .lg_clear-left {
      clear: left;
    }

    .lg_clear-right {
      clear: right;
    }

    .lg_clear-both {
      clear: both;
    }

    .lg_gap-0 {
      gap: 0;
    }

    .lg_gap-1 {
      gap: 0.25rem;
    }

    .lg_gap-2 {
      gap: 0.5rem;
    }

    .lg_gap-3 {
      gap: 0.75rem;
    }

    .lg_gap-4 {
      gap: 1rem;
    }

    .lg_gap-5 {
      gap: 1.25rem;
    }

    .lg_gap-6 {
      gap: 1.5rem;
    }

    .lg_gap-8 {
      gap: 2rem;
    }

    .lg_gap-10 {
      gap: 2.5rem;
    }

    .lg_gap-12 {
      gap: 3rem;
    }

    .lg_gap-16 {
      gap: 4rem;
    }

    .lg_gap-20 {
      gap: 5rem;
    }

    .lg_gap-24 {
      gap: 6rem;
    }

    .lg_gap-32 {
      gap: 8rem;
    }

    .lg_gap-40 {
      gap: 10rem;
    }

    .lg_gap-48 {
      gap: 12rem;
    }

    .lg_gap-56 {
      gap: 14rem;
    }

    .lg_gap-64 {
      gap: 16rem;
    }

    .lg_gap-px {
      gap: 1px;
    }

    .lg_center-v {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  @media (min-width: 1280px) {
    .xl_block {
      display: block;
    }

    .xl_inline-block {
      display: inline-block;
    }

    .xl_inline {
      display: inline;
    }

    .xl_flex {
      display: flex;
    }

    .xl_inline-flex {
      display: inline-flex;
    }

    .xl_hidden {
      display: none;
    }

    .xl_flex-row {
      flex-direction: row;
    }

    .xl_flex-row-reverse {
      flex-direction: row-reverse;
    }

    .xl_flex-col {
      flex-direction: column;
    }

    .xl_flex-col-reverse {
      flex-direction: column-reverse;
    }

    .xl_flex-wrap {
      flex-wrap: wrap;
    }

    .xl_flex-wrap-reverse {
      flex-wrap: wrap-reverse;
    }

    .xl_flex-no-wrap {
      flex-wrap: nowrap;
    }

    .xl_items-start {
      align-items: flex-start;
    }

    .xl_items-end {
      align-items: flex-end;
    }

    .xl_items-center {
      align-items: center;
    }

    .xl_items-baseline {
      align-items: baseline;
    }

    .xl_items-stretch {
      align-items: stretch;
    }

    .xl_self-auto {
      align-self: auto;
    }

    .xl_self-start {
      align-self: flex-start;
    }

    .xl_self-end {
      align-self: flex-end;
    }

    .xl_self-center {
      align-self: center;
    }

    .xl_self-stretch {
      align-self: stretch;
    }

    .xl_justify-start {
      justify-content: flex-start;
    }

    .xl_justify-end {
      justify-content: flex-end;
    }

    .xl_justify-center {
      justify-content: center;
    }

    .xl_justify-between {
      justify-content: space-between;
    }

    .xl_justify-around {
      justify-content: space-around;
    }

    .xl_justify-evenly {
      justify-content: space-evenly;
    }

    .xl_content-center {
      align-content: center;
    }

    .xl_content-start {
      align-content: flex-start;
    }

    .xl_content-end {
      align-content: flex-end;
    }

    .xl_content-between {
      align-content: space-between;
    }

    .xl_content-around {
      align-content: space-around;
    }

    .xl_flex-1 {
      flex: 1 1 0%;
    }

    .xl_flex-auto {
      flex: 1 1 auto;
    }

    .xl_flex-initial {
      flex: 0 1 auto;
    }

    .xl_flex-none {
      flex: none;
    }

    .xl_flex-grow-0 {
      flex-grow: 0;
    }

    .xl_flex-grow {
      flex-grow: 1;
    }

    .xl_flex-grow-2 {
      flex-grow: 2;
    }

    .xl_flex-grow-3 {
      flex-grow: 3;
    }

    .xl_flex-grow-4 {
      flex-grow: 4;
    }

    .xl_flex-grow-5 {
      flex-grow: 5;
    }

    .xl_flex-shrink-0 {
      flex-shrink: 0;
    }

    .xl_flex-shrink {
      flex-shrink: 1;
    }

    .xl_flex-shrink-2 {
      flex-shrink: 2;
    }

    .xl_flex-shrink-3 {
      flex-shrink: 3;
    }

    .xl_flex-shrink-4 {
      flex-shrink: 4;
    }

    .xl_flex-shrink-5 {
      flex-shrink: 5;
    }

    .xl_order-1 {
      order: 1;
    }

    .xl_order-2 {
      order: 2;
    }

    .xl_order-3 {
      order: 3;
    }

    .xl_order-4 {
      order: 4;
    }

    .xl_order-5 {
      order: 5;
    }

    .xl_order-6 {
      order: 6;
    }

    .xl_order-7 {
      order: 7;
    }

    .xl_order-8 {
      order: 8;
    }

    .xl_order-9 {
      order: 9;
    }

    .xl_order-10 {
      order: 10;
    }

    .xl_order-11 {
      order: 11;
    }

    .xl_order-12 {
      order: 12;
    }

    .xl_order-first {
      order: -9999;
    }

    .xl_order-last {
      order: 9999;
    }

    .xl_order-none {
      order: 0;
    }

    .xl_float-right {
      float: right;
    }

    .xl_float-left {
      float: left;
    }

    .xl_float-none {
      float: none;
    }

    .xl_clearfix:after {
      content: "";
      display: table;
      clear: both;
    }

    .xl_clear-left {
      clear: left;
    }

    .xl_clear-right {
      clear: right;
    }

    .xl_clear-both {
      clear: both;
    }

    .xl_gap-0 {
      gap: 0;
    }

    .xl_gap-1 {
      gap: 0.25rem;
    }

    .xl_gap-2 {
      gap: 0.5rem;
    }

    .xl_gap-3 {
      gap: 0.75rem;
    }

    .xl_gap-4 {
      gap: 1rem;
    }

    .xl_gap-5 {
      gap: 1.25rem;
    }

    .xl_gap-6 {
      gap: 1.5rem;
    }

    .xl_gap-8 {
      gap: 2rem;
    }

    .xl_gap-10 {
      gap: 2.5rem;
    }

    .xl_gap-12 {
      gap: 3rem;
    }

    .xl_gap-16 {
      gap: 4rem;
    }

    .xl_gap-20 {
      gap: 5rem;
    }

    .xl_gap-24 {
      gap: 6rem;
    }

    .xl_gap-32 {
      gap: 8rem;
    }

    .xl_gap-40 {
      gap: 10rem;
    }

    .xl_gap-48 {
      gap: 12rem;
    }

    .xl_gap-56 {
      gap: 14rem;
    }

    .xl_gap-64 {
      gap: 16rem;
    }

    .xl_gap-px {
      gap: 1px;
    }

    .xl_center-v {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export default layout;
