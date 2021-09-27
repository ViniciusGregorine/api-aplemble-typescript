-- INSERT INTO sensors 
--    SET description = 'DHT11',
--        id_situation = (
--        SELECT id
--          FROM situations
--         WHERE description = 'quebrado'),
	
-- 		id_gap = (
--         select id 
--         from gaps
--         where description = 160)

INSERT INTO `gaps` (`id`, `description`) VALUES (NULL, '10');

INSERT INTO `situations`(`description`) VALUES ('ligado');

INSERT INTO `sensors` (`id`, `description`, `installation_date`, `device`, `id_situation`, `id_gap`) VALUES (NULL, 'DHT14', '2021-03-06', '0', '1', '1');

INSERT INTO `addresses` (`id`, `street`, `number`, `neighborhood`, `complement`, `city`) VALUES (NULL, 'avenida getulio vargas', '1514', 'são migel', 'predio preto', 'Sombrio');

INSERT INTO `institutions` (`id`, `name`, `email`, `password`, `id_address`) VALUES (NULL, 'IFC', 'ifc@gmail.com', '1234', '1');

INSERT INTO `materials` (`id`, `description`) VALUES (NULL, 'madeira'), (NULL, 'isopor');

INSERT INTO `dimensions` (`id`, `height`, `width`, `length`) VALUES (NULL, '1', '1', '1');

INSERT INTO `places` (`id`, `sensor_temp`, `sensor_humi`, `description`, `note`, `lim_temperature`, `id_dimension`, `id_material`, `id_institution`) VALUES (NULL, '1', '1', 'modulo de isopor', 'localizado aqui', '100', '1', '2', '1');

INSERT INTO `readings` (`id`, `date`, `hour`, `value_humidity`, `value_temperature`, `id_place`, `id_sensor`) VALUES (NULL, '2021-03-06', '09:13:11', '85', '100', '1', '1');
INSERT INTO `readings` (`id`, `date`, `hour`, `value_humidity`, `value_temperature`, `id_place`, `id_sensor`) VALUES (NULL, '2021-03-06', '09:15:11', '95', '60', '1', '1');
