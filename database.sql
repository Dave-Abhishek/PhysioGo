CREATE TABLE `admin` (
  `username` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL
);

INSERT INTO `admin` (`username`, `password`) VALUES
('admin', 'admin');

CREATE TABLE `patient` (
  `pid` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `password` varchar(30) NOT NULL,
  `cpassword` varchar(30) NOT NULL
);

CREATE TABLE `appointment` (
  `pid` int(11) NOT NULL,
  `AppID` int(11) AUTO_INCREMENT PRIMARY KEY,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `email` varchar(30) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `doctor` varchar(30) NOT NULL,
  `docFees` int(5) NOT NULL,
  `appdate` date NOT NULL,
  `apptime` time NOT NULL,
  `userStatus` int(5) NOT NULL,
  `doctorStatus` int(5) NOT NULL,
  `did` int(11) NOT NULL,
  FOREIGN KEY (`pid`) REFERENCES `patient`(`pid`),
  FOREIGN KEY ('did') REFERENCES `doctor`('did')
);

CREATE TABLE `doctor` (
  `did` int AUTO_INCREMENT PRIMARY KEY,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `spec` varchar(50) NOT NULL,
  `docFees` int(10) NOT NULL
);

CREATE TABLE `prescriptiontable` (
  `doctor` varchar(50) NOT NULL,
  `pid` int(11) NOT NULL,
  `AppID` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `appdate` date NOT NULL,
  `apptime` time NOT NULL,
  `disease` varchar(250) NOT NULL,
  `allergy` varchar(250) NOT NULL,
  `prescription` varchar(1000) NOT NULL,
  `did` int(11) NOT NULL,
  FOREIGN KEY (`pid`) REFERENCES `patient`(`pid`),
  FOREIGN KEY ('did') REFERENCES `doctor`('did'),
  FOREIGN KEY (`AppID`) REFERENCES `appointment`(`AppID`)
);

CREATE TABLE `review` (
  `pid` INT(11) NOT NULL,
  `did` INT(11) NOT NULL,
  `ratings` INT(5),
  `remarks` VARCHAR(50),
  FOREIGN KEY (`pid`) REFERENCES `patient`(`pid`),
  FOREIGN KEY ('did') REFERENCES `doctor`('did'),
);

CREATE TABLE `payment` (
  `pid` INT(11) NOT NULL,
  `did` INT(11) NOT NULL,
  `AppID` int(11) NOT NULL,
  `amount` INT NOT NULL,
  `mode` VARCHAR(10) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT "FALSE",
  FOREIGN KEY (`pid`) REFERENCES `patient`(`pid`),
  FOREIGN KEY ('did') REFERENCES `doctor`('did'),
  FOREIGN KEY ('AppID') REFERENCES `appointment`('AppID'),
);