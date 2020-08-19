import React, { Fragment } from "react";
import styled from "styled-components";
import FormTitle from "./FormTitle";
// @ts-ignore
import SelectLabelHelper from "@rakuten-rex/select/SelectLabelHelper";
import { color } from "../css/color";

const SelectLabel = styled(SelectLabelHelper)`
  & .rex-select.active:not(.disable) {
    background-color: ${ color.primaryPink };
    border-color: ${ color.primaryPink };
  }
  &.rex-select select.active:not(.disabled):not(.error):not(.valid),
  .rex-select select.focus:not(.disabled):not(.error):not(.valid),
  .rex-select select:active:not(.disabled):not(.error):not(.valid),
  .rex-select select:focus:not(.disabled):not(.error):not(.valid) {
    border-color: ${ color.primaryPink };
  }
  &.rex-select.hover:not(.disabled):not(.active):not(.error):not(.valid),
  .rex-select:hover:not(.disabled):not(.active):not(.error):not(.valid) {
    border-color: ${ color.primaryPink };
  }
`;

interface OwnProps {
  className?: string;
}

const FormSelectLabel: React.SFC<OwnProps> = ({ className }) => {
  return (
    <Fragment>
      <FormTitle isLast={false} isMandatory={true} title="カテゴリ" />
      <SelectLabel
        className={`input ${className}`}
        id="age"
        label=""
        placeholder="選択してください"
        Ï
        options={[
          { text: "Option 1", value: "option_1" },
          { text: "Option 2", value: "option_2" },
          { text: "Option 3", value: "option_3" },
        ]}
        htmlFor="age"
      />
    </Fragment>
  );
};

export default FormSelectLabel;
