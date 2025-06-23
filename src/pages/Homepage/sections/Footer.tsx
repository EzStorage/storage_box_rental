import React from "react";
import { Box, Divider } from "@mui/material";
import { FooterText, FooterTitle } from "../Homepage.styles";
import Logo from "@components/Logo";
import { FacebookIcon } from "@components/Icons/FacebookIcon";
import { LinkedInIcon } from "@components/Icons/LinkedInIcon";
import { InstagramIcon } from "@components/Icons/InstagramIcon";

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "40px 24px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    maxWidth: 1200,
                    margin: "0 auto",
                    gap: 4,
                }}
            >
                {/* Logo Column */}
                <Box sx={{ flex: "200px", display: "flex", alignItems: "up" }}>
                    <Logo />
                    <FooterTitle style={{ fontSize: "1.5rem", paddingTop: "5px" }}>
                        Storage
                    </FooterTitle>
                </Box>

                {/* Contact Us */}
                <Box sx={{ flex: "1 1 200px" }}>
                    <FooterTitle>Contact Us</FooterTitle>
                    <FooterText>cs@ezstorage.vn</FooterText>
                    <FooterText>+65 6220 0126</FooterText>
                    <FooterText>3 Pickering St, #03-06, Singapore 048660</FooterText>
                </Box>

                {/* Working Hours */}
                <Box sx={{ flex: "1 1 200px" }}>
                    <FooterTitle style={{ marginBottom: "20px" }}>Working hours</FooterTitle>
                    <FooterText style={{ fontSize: "15px", lineHeight: "20px" }}>
                        Customer Support Hours
                    </FooterText>
                    <FooterText style={{ fontWeight: 400, marginBottom: "20px" }}>
                        Mon to Fri: 9:30 AM - 5:00 PM
                    </FooterText>
                    <FooterText style={{ fontSize: "15px", lineHeight: "20px" }}>
                        Delivery Hours
                    </FooterText>
                    <FooterText style={{ fontWeight: 400 }}>
                        Mon to Fri: 9:30 AM - 5:00 PM
                    </FooterText>
                    <FooterText style={{ fontWeight: 400 }}>Sat: 9:30 AM - 1:00 PM</FooterText>
                </Box>

                {/* Social Media Icons */}
                <Box sx={{ flex: "1 1 200px" }}>
                    <FooterTitle>Follow Us</FooterTitle>
                    <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                        <FacebookIcon />
                        <LinkedInIcon />
                        <InstagramIcon />
                    </Box>
                </Box>
            </Box>

            <Divider sx={{ backgroundColor: "#444", marginY: 4 }} />

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column-reverse", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "left",
                    marginTop: "8px",
                    color: "#777",
                    fontSize: "13px",
                    gap: { xs: "12px", md: 0 },
                }}
            >
                <FooterText style={{ textAlign: "left" }}>
                    © 2077 EzStorage. All rights reserved.
                </FooterText>

                <Box sx={{ display: "flex", gap: "20px" }}>
                    <FooterText style={{ cursor: "pointer" }}>Terms of Use</FooterText>
                    <FooterText style={{ cursor: "pointer" }}>Privacy Policy</FooterText>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
