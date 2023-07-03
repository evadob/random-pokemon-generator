import classes from "./RefreshButton.module.css";

export const RefreshButton = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <button className={classes.btn} onClick={handleRefresh}>
      Generate
    </button>
  );
};
