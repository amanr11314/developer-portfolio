import crefin from '/public/image/crefin.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Expresscart',
        description: "Built a FullStack e-commerce web app.\
        Frontend development using Angular, Backend implementation built using Node.js and Express.js for handling API integrations\
        Database management: Utilized PostgreSQL as the database to store and manage data\
        User authentication: JWT User authentication, Email verification and Custom middleware\
        Product catalog, Shopping Cart functionality: Created a product catalog with feature to add to cart\
        Consumed Sequelize for ORM, database migrations, and table associations using sequelize models.\
        Generated API docs using swagger-UI.\
        Used Openai to generate angular-typescript Api client",
        tools: ['Angular', 'Express', 'Multer', 'Postgres', 'JWT', 'Swagger-UI', 'OpenAI API', 'Tailwind CSS', 'Sequelize ORM'],
        role: 'FullStack Developer',
        code: 'https://github.com/amanr11314/expresscart',
        demo: '',
        image: '',
    },
    {
        id: 2,
        name: 'AI-Enabled FinTech B2B Invoice Management App',
        description: 'Developed an AI enabled Full-stack Invoice Management Application using Agile methodologies.\
        Worked with 45000+ records in the database.\
        Trained ML prediction model with an accuracy score of 65.69%\
        Data Analytics\
        2 types of Data Visualization\
        Responsive Receivables Dashboard, Crud operations, Pagination',
        tools: ['React.JS', 'Material UI', 'Python', 'Java Servlets', 'MySQL', 'Flask API', 'Numpy', 'Matplotlib'],
        role: 'Full Stack Developer',
        code: 'https://github.com/amanr11314/b2b_invoice_management/',
        demo: '',
        image: crefin,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },