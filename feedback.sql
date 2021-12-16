-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2021 at 03:51 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thecafe`
--

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `EMAILID` varchar(255) DEFAULT NULL,
  `SUBJECT` varchar(255) DEFAULT NULL,
  `MESSAGE` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`ID`, `NAME`, `EMAILID`, `SUBJECT`, `MESSAGE`) VALUES
(1, 'ABHEER', 'abheer.mehrotra2001@gmail.com', 'HELLO', 'AAAAAAAAAAAAAAAAAAAAAA'),
(2, 'ABHEER', 'abheer.mehrotra2001@gmail.com', 'HELLO', 'HIE GOOD MORNING'),
(3, 'ABHEER', 'abheer.mehrotra2001@gmail.com', 'HELLO', 'hieeeeeeeeeeeeeee bieeeeeeeeeeeeeeeeee'),
(4, 'ABHEER', 'abheer.mehrotra2001@gmail.com', 'HELLO', 'wwwwwwwwwwwwwwwwwwoooo'),
(5, 'ABHEER', 'abheer.mehrotra2001@gmail.com', 'hello', 'dewdsdfwe'),
(6, 'ABHEER', 'abheer.mehrotra2001@gmail.com', 'HELLO', 'dcfdcs'),
(7, 'ABHEER', 'abheer.mehrotra2001@gmail.com', 'HELLO', 'ddddddddddddddddddddddddddddd'),
(8, 'sanchit bajaj', 'aditisingla0907@gmail.com', 'HELLO', 'dsfcdsv'),
(9, 'ABHEER MEHROTRA', 'abheer.mehrotra2001@gmail.com', 'TEST MAIL', 'this is the testmail');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
