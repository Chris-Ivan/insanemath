-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2020 at 07:35 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `insanemath`
--

-- --------------------------------------------------------

--
-- Table structure for table `highscore_elementary`
--

CREATE TABLE `highscore_elementary` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `score` int(11) NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `highscore_juniorhigh`
--

CREATE TABLE `highscore_juniorhigh` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `score` int(11) NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `highscore_seniorhigh`
--

CREATE TABLE `highscore_seniorhigh` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `score` int(11) NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `pic` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES
(1, 'pege', '1ffbef89a1cda758c9b8812288ff99c07187d88b1befe528950ed986e4f93a129354b6a075db33b139d16ff09eabc66741a932cd7b3a62e0ec2d6905230ecd06', 'default-user.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `highscore_elementary`
--
ALTER TABLE `highscore_elementary`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `highscore_juniorhigh`
--
ALTER TABLE `highscore_juniorhigh`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `highscore_seniorhigh`
--
ALTER TABLE `highscore_seniorhigh`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `highscore_elementary`
--
ALTER TABLE `highscore_elementary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `highscore_juniorhigh`
--
ALTER TABLE `highscore_juniorhigh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `highscore_seniorhigh`
--
ALTER TABLE `highscore_seniorhigh`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
