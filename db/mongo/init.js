
db.auth('dev', 'super_secret')

db = db.getSiblingDB('test_db')

db.createUser(
    {
        user: "test_user",
        pwd: "test_password",
        roles: [
            {
                role: "readWrite",
                db: "test_db"
            }
        ]
    }
)