import React, { Fragment } from "react";
import styled from "styled-components";
import FormTitle from "./FormTitle";
// @ts-ignore
import TextareaLabelHelper from "@rakuten-rex/textarea/TextareaLabelHelper";
import { color } from "../css/color";

interface OwnProps {
  className?: string;
  title: string;
  isMandatory: boolean;
  isLast: boolean;
}
const ModifiedTextareaLabelHelper = styled(TextareaLabelHelper)`
  & .rex-textarea-ui-border.active:not(.disabled),
  .rex-textarea-ui-border.focus:not(.disabled),
  .rex-textarea-ui-border:active:not(.disabled),
  .rex-textarea-ui-border:focus:not(.disabled) {
    background-color: var(--rex-textarea-theme-active-border, ${ color.primaryPink });
    border-color: var(--rex-textarea-theme-active-border, ${ color.primaryPink });
    outline: none;
  }
  & .rex-textarea-ui.active:not([disabled]):not(.error):not(.valid),
  .rex-textarea-ui.focus:not([disabled]):not(.error):not(.valid),
  .rex-textarea-ui:active:not([disabled]):not(.error):not(.valid),
  .rex-textarea-ui:focus:not([disabled]):not(.error):not(.valid) {
    border-color: var(--rex-textarea-theme-active-border, ${ color.primaryPink });
    color: var(--rex-textarea-theme-active-text, #333);
  }
`;

const TextArea: React.SFC<OwnProps> = ({
  className,
  title,
  isMandatory,
  isLast,
}) => {
  return (
    <Fragment>
      <FormTitle isLast={isLast} isMandatory={isMandatory} title={title} />
      <ModifiedTextareaLabelHelper
        className={`input ${className}`}
        placeholder=""
        label=""
        helper="全角200文字で入力してください。"
        id="age"
        htmlFor="age"
        labelId="labelId"
      />
    </Fragment>
  );
};

export default TextArea;
