export default function Pagination(theme) {
  return {
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-root": {
            color: "#fff",
            backgroundColor: "#ff5000",
            "&:hover": {
              backgroundColor: "#424242",
            },
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#424242",
          },
        },
      },
    },
  };
}
