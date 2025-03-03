import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
	src: "../../public/font/PretendardVariable.woff2",
	variable: "--font-pretendard",
	display: "block",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={pretendard.className}>{children}</body>
		</html>
	);
}
