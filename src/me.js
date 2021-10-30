export const me = {
    name: 'Gregorio',
    surname: 'Giorgino',
    profession: 'Web Developer',
    photo: {
        path: "../images/me/me.jpg",
        style: {

            clipPath: 'circle(120px at 55% 23%)',
            width: "250px",
            height: "auto"
        }
    },
    style: {
        textAlign: "center",
        position: "relative",
        margin: "0 10px",
        padding: "0 50px"
    },
    finished_exams: {
        examStyle: {
            margin: "0 30px"
        },
        exams: [
            {
                subject_key: 'ium_title',
                icon: '🔮',
                score: 26
            },
            {
                subject_key: 'cs_title',
                icon: '👨‍💻',
                score: 24
            }
        ]
    }
}