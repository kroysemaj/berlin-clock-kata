function convertSingleMinutes(time) {
  const results = ["0000", "Y000", "YY00", "YYY0", "YYYY"];
  return results[giveRemainderOf5(time)];
}

function convert5MinuteBlocks(time) {
  const results = ["00000000000", "Y0000000000", "YY000000000"];
  return results[giveRemainderFor5MinuteBlocks(time)];
  // return giveRemainderFor5MinuteBlocks(time);
}

function giveRemainderOf5(mins) {
  return mins % 5;
}

function giveRemainderFor5MinuteBlocks(mins) {
  return Math.floor(mins / 5);
}
