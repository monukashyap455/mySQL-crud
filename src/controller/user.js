const con = require("../dataBase/mySql");


module.exports.userGet = async (req, res) => {
    try {

        const data = 'SELECT * FROM users'
        con.query(data, (err, result) => {
            if (err) {
                console.log(err);
            }
            // console.log(result);
            res.json(result)
        })

    } catch (error) {
        res.send(error)

    }

}

module.exports.createtable = async (req, res) => {
    try {

        var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),mobile INT,gender VARCHAR(255),age INT,city INT)";
        con.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            };
            console.log("Table created");
            res.json("table created successfuilly ....")
        });


    } catch (error) {

    }
}

module.exports.insertData = async (req, res) => {
    try {
        const { name, mobile, age, gender, city } = req.body
        var sql = "INSERT INTO users (name, mobile,age,gender,city) VALUES (?,?,?,?,?)";
        // console.log(sql);
        const data = [name, mobile, age, gender, city]
        con.query(sql, data, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.send("Data inserted successfully .... ")
        });

    } catch (error) {
        res.send(error)

    }
}


module.exports.deleteData = async (req, res) => {
    try {
        const id = req.params.id
        var sql = "DELETE FROM customer_data WHERE id = id";
        const data = [id]

        con.query(sql, data, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.status(200).json("data successfully deleted")
        });

    } catch (error) {
        res.send(error)

    }
}


module.exports.updateData = async (req, res) => {
    try {
        const id = req.params.id
        const { name, mobile, age, gender } = req.body;

        var sql = "UPDATE customer_data SET name = ?, mobile =? , age =? , gender =? WHERE id = ?";
        const data = [name, mobile, age, gender, id]
        con.query(sql, data, (err, result) => {
            if (err) throw err;
            res.send(result.affectedRows + " record(s) updated");

        });

    } catch (err) {
        res.send(err)

    }
}
