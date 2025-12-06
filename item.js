const MANGA_DATA = [
    {
        title: 'Absolute Sword Sense',
        Image: 'image/Absolute Sword Sense.webp',
        author: 'Hanjung Wolya (Original), Kim Durumi (Adaptation), TI (Art)',
        status: 'Ongoing',
        released: '2022', // Manhwa webtoon began serialization around this time.
        genre: 'Action, Martial Arts, Murim, Fantasy, Time-Travel',
        description: 'After his Dantian was destroyed, Jin Woon-Hwi, a third-rate spy for the Blood Cult, dies. He returns to his past self ten years ago, right after he was kidnapped, and gains a mysterious ability: the Absolute Sword Sense, which allows him to hear the voice of swords. He now uses this chance to survive and become the strongest.',
    },
    {
        title: 'Demonic Master of Mount Kunlun',
        Image: 'image/Demonic Master of Mount Kunlun.webp',
        author: 'Geulbyeol Jali (Original), Heron Nest (Adaptation)',
        status: 'Completed (Axed)', // Note: Manhwa/Webtoon was canceled early.
        released: '2023', // Approximate start year for webtoon
        genre: 'Action, Martial Arts, Murim, Reincarnation, Comedy',
        description: 'The True Heavenly Demon, the former leader of the Demonic Cult, dies after a short tenure and is reborn as a baby. Abandoned and then picked up by a Taoist, he is raised in the justice-aligned Kunlun School. Now known as Jung Gwang, the Demonic Master must navigate the world of Murim with his past memories and powerful cultivation knowledge, causing upheaval in the rigid Kunlun Sect.',
    },
    {
        title: 'Doctor’s Rebirth',
        Image: 'image/Doctor’s Rebirth.webp',
        author: 'Jeon Yul (Original Novel)',
        status: 'Ongoing',
        released: '2022', // Manhwa webtoon began serialization around this time.
        genre: 'Action, Adventure, Drama, Fantasy, Medical, Martial Arts',
        description: 'A modern-day surgeon dies while performing humanitarian medical volunteer work during a civil war. He is reincarnated in a Murim (martial arts) world, where he must use his extensive medical knowledge, coupled with the secrets of Eastern medicine he learns, to save lives and navigate the political and martial conflicts of his new life.',
    },
    {
        title: 'Father, Unrivaled',
        Image: 'image/Father, Unrivaled.webp',
        author: 'Lee Jinsu (Story)',
        status: 'Ongoing',
        released: '2017',
        genre: 'Action, Drama, Martial Arts, Murim, Fatherhood',
        description: 'Gajang Noh, a dedicated and strong martial artist, is forced to take on dangerous, high-risk jobs to support his young daughter after the death of his wife. As a legendary fighter for hire, he must balance the brutal world of Murim with his life as a devoted single father.',
    },
    {
        title: 'Fist Demon of Mount Hua',
        Image: 'image/Fist Demon of Mount Hua.webp',
        author: 'U-Gak (Author of LOTNB)', // Manhwa was unfortunately axed
        status: 'Completed (Axed)',
        released: '2023', // Approximate start year
        genre: 'Action, Martial Arts, Murim, Cultivation',
        description: 'A young man whose legs were injured is adopted by the Mount Hua Sect but is unable to learn their techniques. He later learns a unique, powerful martial art on his own. The story follows his violent path as he rises to power, often with brutal fighting.',
    },
    {
        title: 'Heavenly Demon Reborn!',
        Image: 'image/Heavenly Demon Reborn!.webp',
        author: 'O\'Emperor (Story), Gom-Guk (Art)',
        status: 'Ongoing',
        released: '2018',
        genre: 'Action, Fantasy, Martial Arts, Reincarnation, Murim',
        description: 'The protagonist, a former member of the Demonic Cult, is reborn after his death. Using his past life\'s memories and knowledge, he embarks on a journey to reclaim his power and influence in the Murim world, often surprising his new companions and enemies with his formidable skills.',
    },
    {
        title: 'Heavenly Inquisition Sword',
        Image: 'image/Heavenly Inquisition Sword.webp',
        author: 'Unknown Author', // Difficult to confirm specific webtoon crew
        status: 'Ongoing',
        released: '2022', // Approximate start year
        genre: 'Action, Martial Arts, Fantasy, Historical',
        description: 'A martial arts tale centered around a legendary sword, the Heavenly Inquisition Sword, which has the power to change the balance of the Murim world. A hero embarks on a journey to wield or protect this sword, facing powerful enemies and conspiracies along the way.',
    },
    {
        title: 'Murim Login',
        Image: 'image/Murim Login.webp',
        author: 'Zero (Story), Studio Nard (Art)',
        status: 'Ongoing',
        released: '2020',
        genre: 'Action, Comedy, Fantasy, Martial Arts, VR, System',
        description: 'Jin Tae-Kyung is an ordinary hunter who accidentally stumbles upon a virtual reality game capsule that transports him into the brutal, martial arts world of Murim. The unique catch: he gains strength in the game, which is then transferred to his real body. He must now balance his life as a hunter and his journey to master Murim\'s techniques.',
    },
    {
        title: 'Murim RPG Simulation',
        Image: 'image/Murim RPG Simulation.webp',
        author: 'Hyung Geun Cho (Story), Kwang Hwi (Art)',
        status: 'Ongoing',
        released: '2021',
        genre: 'Action, Fantasy, Martial Arts, System, Simulation',
        description: 'Seolhwi, a weak disciple of the Demonic Cult, dies in a battle only to wake up with a game-like "System" that allows him to relive his life and make different choices, complete quests, and train. He uses this power to survive and rapidly grow stronger in the treacherous world of Murim.',
    },
    {
        title: 'Nano Machine',
        Image: 'image/Nano Machine.webp',
        author: 'Hanjung Wolya (Original), Jeolmu Hyeon (Adaptation), Redice Studio (Art)',
        status: 'Ongoing',
        released: '2020',
        genre: 'Action, Sci-Fi, Martial Arts, Fantasy, System',
        description: 'Cheon Yeo-Woon, the unwanted illegitimate son of the Demonic Cult leader, is ridiculed and bullied until a descendant from the future injects a nano-machine into his body. The nano-machine provides him with incredible analytical, self-healing, and training abilities, setting him on an unstoppable path to become the strongest warrior in the Murim.',
    },
    {
        title: 'Reborn as a Scholar',
        Image: 'image/Reborn as a Scholar.webp',
        author: 'Unknown Author (Webtoon)', // Based on the novel 'The Reincarnated Scholar'
        status: 'Ongoing',
        released: '2021', // Approximate start year
        genre: 'Fantasy, Martial Arts, Reincarnation, Historical',
        description: 'A brilliant but cynical modern man is reincarnated into the past as a scholar. He decides to live a quiet life of reading and poetry, but his past life\'s knowledge and an unexpected destiny pull him into the complex and often dangerous conflicts of the Murim.',
    },
    {
        title: 'Return of the Mad Demon',
        Image: 'image/Return of the Mad Demon.webp',
        author: 'Lee-Kwang (Story), Taesong (Art)',
        status: 'Ongoing',
        released: '2021',
        genre: 'Action, Comedy, Martial Arts, Reincarnation, Murim',
        description: 'Jang Cheon, the leader of the Crazy Demon Cult, meets an absurd end but is sent back in time to his youthful body. Armed with his previous life\'s knowledge and his famously unpredictable "mad" personality, he sets out to correct his past mistakes and shake up the entire Murim world with his unique brand of chaos and power.',
    },
    {
        title: 'The Legend of the Northern Blade',
        Image: 'image/The Legend of the Northern Blade.webp',
        author: 'HAE MIN (Story), Woogack (Art)',
        status: 'Completed (Season Hiatus)',
        released: '2019',
        genre: 'Action, Martial Arts, Revenge, Period Piece, Murim',
        description: 'After the leader of the Northern Heavenly Sect is accused of treason and commits suicide, his son, Jin Mu-Won, is forced into a life of surveillance. Alone, he dedicates himself to mastering the secret techniques of his father’s sect, plotting his revenge and preparing to fight the forces of the Silent Night and the corrupt martial alliances.',
    },
    {
        title: 'The Undefeatable Swordsman',
        Image: 'image/The Undefeatable Swordsman.webp',
        author: 'Red Sunset (Original), Rokmedia (Studio)',
        status: 'Completed (Novel), Ongoing (Manhwa)',
        released: '2020', // Approximate start year
        genre: 'Action, Fantasy, Martial Arts, Revenge, Cultivation',
        description: 'A tale of a swordsman\'s grueling journey to become the strongest. The story follows his rigorous training, growth, and battles in a world where martial arts reigns supreme. He faces immense trials, using his unwavering determination to carve his own path in the Murim.',
    },
    {
        title: 'Volcanic Age',
        Image: 'image/Volcanic Age.webp',
        author: 'Tomato (Story), Jeong-Jun (Art)',
        status: 'Ongoing',
        released: '2019',
        genre: 'Action, Fantasy, Martial Arts, Reincarnation, Time Travel',
        description: 'Joo Seo-Cheon, a former Elder of the Hwasan (Volcanic) Sect, lives a life of regret until he is sent back in time to his younger self. Armed with the knowledge of a future war and decades of martial arts experience, he aims to prevent past tragedies, save his sect, and reach the peak of martial power.',
    },

]