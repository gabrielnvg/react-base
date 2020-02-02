export function hasCommandFlag(flag) {
  const getCommandFlags = () =>
    JSON.parse(process.env.npm_config_argv).original;
  const commandFlags = getCommandFlags();
  return commandFlags.includes(flag);
}
