// export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
    common: {
        image: '/images/me.jpg',
    },
    index: {
        title: 'Anh Nguyen | Software Engineer & Designer',
        description: 'Anh Nguyen, software engineer graduate student based in Minneapolis, MN. I focus primarily on building (and occasionally designing) usable, exceptional, and scalable websites, applications, and everything in between.'
    },
    profile: {
        title: 'Anh Nguyen | Profile',
        description: 'I’m currently completing my Master Degree in Software Engineering at University of St. Thomas building things for the web with some awesome people. I graduated from Bemidji State University with B.S in Design. \n' +
            '\n' +
            'As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.\n' +
            '\n' +
            'When I’m not in front of a computer screen, I’m probably camping, researching around new local restaurants, or crossing off another item on my bucket list.'
    },
    works: {
        title: 'Anh Nguyen | Works',
        description: 'A selection of the work carried out over 4+ years of work. Among which: Websites, Web applications, coordinated images and more.'
    }
}
