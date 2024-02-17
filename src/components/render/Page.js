import { useEffect } from "react";
import SuspenseWrapper from "./SuspenseWrapper";
import Box from "@mui/material/Box";
import { MainHeader } from "components/molecules";

const Page = ({ title, children }) => {

  useEffect(() => {
    document.title = title;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SuspenseWrapper>
      <Box
        sx={{
          py: { xs: 18, md: 10 },
          px: { xs: 6, md: 10 },
          m: "auto",
          textAlign: "center",
        }}
        maxWidth="xl"
      >
        <MainHeader />
        {children}
      </Box>
    </SuspenseWrapper>
  );
};

export default Page;
