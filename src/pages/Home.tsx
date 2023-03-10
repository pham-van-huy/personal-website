import React from 'react'

import Avatar from '../assets/avatar-cv.jpg'

type SKILL = {
    name: string,
    percent: number
}
const Home: React.FC = () => {
    const skills: SKILL[] = [
        { name: 'MySQL', percent: 80 },
        { name: 'Docker', percent: 60 },
        { name: 'PHP', percent: 80 },
        { name: 'Laravel', percent: 80 },
        { name: 'Javascript', percent: 70 },
        { name: 'Javascript', percent: 40 },
        { name: 'Vuejs', percent: 80 },
        { name: 'Reactjs', percent: 40 },
        { name: 'CSS', percent: 70 },
    ]

    const listSkills = skills.map(skill => {
        return <li className="pb-1.5 text-sm font-thin last:pb-0">
            <span className="block">{ skill.name }</span>
            <span className="block h-1.5 bg-sky-100 rounded-full">
                <span className="block h-full bg-sky-300 rounded-full" style={{width: `${skill.percent}%`}}/>
            </span>
        </li>
    })

    return <div className="grid grid-cols-2 grid-rows-1 grid-cols-1 mx-auto">
        <div className="bg-blue-900">
            <div className="w-full h-[24rem]">
                <img src={Avatar} className="block mx-auto max-h-[100%] w-full h-full"/>
            </div>
            <div className="pb-10 px-10 text-sky-100">
                <h1 className="text-sky-400 uppercase text-4xl font-bold py-6 text-center">Phạm Văn Huy</h1>
                <p className="uppercase text-2xl text-center pb-3">Kỹ sư phần mềm</p>
                <p className="font-thin pb-12">Tôi là một kỹ sư phần mềm tạo ra những ứng dụng có hiệu suất cao và có tổ chức. Tôi có kinh nghiệm về thiết kế sản phẩm và quan hệ với khách hàng.</p>
                <h3 className="uppercase font-bold text-2xl pb-3">Kỹ năng chính</h3>
                <ul className="pb-12">
                    {listSkills}
                </ul>
                <h3 className="uppercase font-bold text-2xl pb-3">LIÊN HỆ TÔI:</h3>
                <ul>
                    <li>Email: <a href="mailto:phamvanhuy14@gmail.com">phamvanhuy14@gmail.com</a></li>
                    <li>Phone number: <a href="tel:+84349826109">+84 349 826 109</a></li>
                    <li>Website: <a href="https://pham-van-huy.github.io/">https://pham-van-huy.github.io/</a></li>
                    <li>
                        Address:
                        <a target="_blank" href="https://goo.gl/maps/1VDzDxR647TgtuSj7">
                            44/18, K20 street, Khue My Ward, Ngu Hanh Son District, Da Nang City
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div>AAAAAA</div>
    </div>
}

export default Home