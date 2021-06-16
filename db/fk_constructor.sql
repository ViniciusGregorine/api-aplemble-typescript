ALTER TABLE sensors
ADD CONSTRAINT fk_situation
FOREIGN KEY (id_situation) REFERENCES situations(id),
ADD CONSTRAINT fk_gap
FOREIGN KEY (id_gap) REFERENCES gaps(id);

ALTER TABLE readings
ADD CONSTRAINT fk_place
FOREIGN KEY (id_place) REFERENCES places(id),
ADD CONSTRAINT fk_sensor
FOREIGN KEY (id_sensor) REFERENCES	 sensors(id);

ALTER TABLE places
ADD CONSTRAINT fk_dimension
FOREIGN KEY (id_dimension) REFERENCES dimensions(id),
ADD CONSTRAINT fk_material
FOREIGN KEY (id_material) REFERENCES materials(id),
ADD CONSTRAINT fk_instituition
FOREIGN KEY (id_institution) REFERENCES institutions(id);

ALTER TABLE institutions
ADD CONSTRAINT fk_adress
FOREIGN KEY (id_adress) REFERENCES adresses(id);