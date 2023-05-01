INSERT INTO department (name)
VALUES ("IT"),
       ("Customer Service"),
       ("Human Resource"),
       ("Management"),
       ("Production"),
       ("Game Design");

    INSERT INTO roles (title,salary,department_id)
VALUES ("Manager",6000,4),
       ("Customer Rep",4000,2),
       ("HR specialist",3800,3),
       ("Accountant",4200,3),
       ("Designer",5000,6),
       ("Developer",5400,1);


       INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Anya","Johnson",1,2),
       ("Zurin","Hammad",6,1),
       ("Hamza","Wades",4,1),
       ("Rumi","Markham",1,1),
       ("John","Watson",3,1),
       ("Mara","Gilmore",2,1);

       