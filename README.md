MASA project from Instituto Federal Catarinense (IFC)
---
## Objective 
build an API to manage the input data from sensors to a database, and manage the sensors and environment either

## Technologies and libraries
- typeScript
- NodeJs
- Express 
- Mysql2 
- jasonwebtoken
- swagger for documentation
---

## How to run project (explaining to myself)
1. `git clone`
2. Install node and npm 
3. `npm i` project root
4. Install xampp
5. `sudo /opt/lampp/lampp start` for xampp
6. Run the sql from `scripts/db/all_db_masa_3.sql`
7. If you want some data, run the sql from `scripts/db/insert-example_sensor_3.sql`
8. Creat `.env` file and put the infos
9. `npm run dev`
10. Open the URL and you will be on documentation 