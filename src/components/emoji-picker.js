// vendors
import React, { memo } from "react";
import { Picker } from "emoji-mart";
import t from "prop-types";
import "emoji-mart/css/emoji-mart.css";

/**
 * @typedef {import('emoji-mart').PickerProps} PickerProps
 */

/**
 * @typedef {object} Props
 * @property {function(import("../types/types").EmojiMartItem): void} onSelectEmoji
 * @extends {PickerProps}
 */

/**
 * Emoji Picker Component
 * @param {Props} props
 * @return {React.FC}
 */
function EmojiPicker({ onSelectEmoji, ...props }) {
  return <Picker {...props} onSelect={onSelectEmoji} />;
}

EmojiPicker.propTypes = {
  onSelectEmoji: t.func,
  disableRecent: t.bool,
  customEmojis: t.array
};

export default memo(EmojiPicker);
