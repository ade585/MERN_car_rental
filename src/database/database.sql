CREATE TABLE `cars` (
  `id` varchar(36) NOT NULL,
  `name` varchar(36) DEFAULT NULL,
  `dailyPrice` int DEFAULT NULL,
  `monthlyPrice` int DEFAULT NULL,
  `mileage` varchar(45) DEFAULT NULL,
  `gas` varchar(45) DEFAULT NULL,
  `transmission` varchar(45) DEFAULT NULL,
  `thumbnailUrl` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ;

INSERT INTO `heroku`.`cars` 
(`id`, `name`, `dailyPrice`, `monthlyPrice`, `mileage`, `gas`, `transmission`, `thumbnailUrl`) 
VALUES ('aab', 'monvehicule', '100', '10', 'chaisp', 'petrol', 'auto', 'https://www.google.com');
