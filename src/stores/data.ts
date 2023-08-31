import { ref, type Ref } from 'vue'
import type { Data } from '@/types/Data'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const data: Ref<Data> = ref([
    {
      image: 'Crowe-Director',
      content:
        '"I got the inspiration from one of the past Governors of Lagos State" – Mr. Alli Adetayo.',
      category: 'news',
      author: 'Yusuf Olosan'
    },
    {
      image: 'A-Day-Director-Speech',
      content: `*A DAY DIRECTOR: CROWE SCHOOLS TRAILBLAZING, SETTING THE PACE, RAISING THE BAR.*\n
        “I got the inspiration from one of the past Governors of Lagos State” – *Mr. Alli Adetayo.*
        Thursday, the 9th of March 2023, was a great moment and a great event for all who witnessed and participated in the glorification of *Mr Adebiyi Isreal,* the pioneer “One Day Director” of Crowe International Schools, Iwo.
        The idea of *‘A Day Director‘* having being discussed at one of the school’s PTA meetings, was to help awaken and discover the “latent” leadership quality in student. It was also aimed at creating a positive and constructive competition among the students.   After a thorough screening and assessment process where nine (9) outstanding students were involved, *Adebiyi Isreal* emerged the overall winner.
        *Adebiyi Isreal* Adeyemi was born into the family of Engineer Mr & Mrs Adebiyi Adedotun on the 13th, August  2010. He is the first child of four children of this noble family. He has on many occasions emerged as the best student of his class. Isreal also had the best result in the Junior Secondary Schools Certificate Examination (JSSCE), which he wrote in JSS3, 2022. Currently, he is the standing overall best student in SSS1 class being the recipient of the award in 2022.
        *HOW THE DAY WENT*\n
        The Director decorated was conveyed to school in the early hours of Thursday, the 9th of February, 2023 in company of escorts (a private security outfit) and entourage.
        The event began with a general assembly for the whole school where the decorated Director (Mr Adebiyi) addressed the entire students of the school.
        He began his address by greeting the students as peculiar of a Director. He urged the students to emulate him by being committed to their academic work and that they should continue thriving for excellence in all that they do. He also beseeched them to be more discipline and committed to their dreams. He ended his speech by hauling the mantra “CROWE SCHOOLS” while the students in their exuberance reverberated with great echoes “LEADING WITH COGNITION“!!!
        After the assembly, the One-Day Director in company of his escorts, paid homage to the main Director, Mr Alli Adetayo, the School Head Of Administration, Mr Jessy Moses, and other Principal Officers of the School. He, afterwards had a brief meeting with all the members of the staff of the School where he appreciated all their efforts on him and other students of the School. “May the Good Lord  bless and cause you to reap the good fruit of your labour. I hereby solicit your support and cooperation in order to make this school greater. I love you all and I appreciate you genuinely, I thank you”, he said. His briefing was received with great joy and pleasantness by all members of the staff. He was then taken to the Director’s Office where he attended to the press.
        At the School Hall, the School Scout members under their commandant’s lead, Ambassador Olaoluwa ushered the decorated Director in the most spectacular and dignified way. Such that, one would have thought it’s the Head of  State. As part of the programme, Three (3) Students of the School gave commentaries about the decorated Director. All of them attesting to his excellence spirit. Akinlabi Na’eem, a JSS1 student professed “Senior Isreal is an extraordinary man and also excellent. He relates with me and my colleagues in love and humility not minding the wide gap between us”. Aworinde Hephzibah, from JSS3  describes him as “a radiant shining light and a beacon of excellence”, while Ishola Mustapha from SS1 who happens to be the decorated Director’s  bosom friend said in his address that he’s not surprise with his achievement he described him as a great inspiration to him personally, “you’ve broken the record and you’ll continue to excel more and more”.
        In his fatherly address, the Chairman of the PTA Executive Committee, praised the School for such an intelligent initiative. He wasn’t economical in the expression of his joy and satisfaction with the programme.
        Two members of the staff in persons of Mr Yusuf Qamorudeen, the School’s Chief Imam and Chairman of the School press, and Mr Siraj L., the School’s Vice Principal gave their commentaries about the One Day Director (Mr Adebiyi Isreal), both stating that it is an honour well meted.
        The School Director, Mr Alli Adetayo while giving his powerful speech about the whole event, said he got the inspiration from “A Day Governor” initiative of a former Executive Governor of Lagos state and the current President-elect of the Federal Republic of Nigeria, Asiwaju Bola Ahmed Tinubu. “We don’t have the power to make a governor yet, but we can make a One-Day Director”. He aslo stressed the importance of the initiative which is “to identify latent leadership talents in students, enablement of a constructive and positive competition as it’s required in an academic environment and to reconstruct the mindset of the students to seeing the supreme importance of education”. He solicite the support of the Parents and Students and told them to await more colorful and intellectual programme unfolds.
        Following this, the One Day Director was called out for his presentation and again, he appreciated the School Director for his efforts and commitments on the School and on him, personally. In appreciation of the staff’s efforts, he approved the payment of staff transportation allowance, a reasonable and dignified sum. He also stated that his “leadership promises to be fair and also credible.”
        Awards and gifts were presented to him and he was thereafter ushered to his office where he assumed the administrative duties of the day. He served in the capacity of the School Director for 24 hours.`,
      category: 'news',
      author: 'Yusuf Olosan'
    },
    {
      image: 'preview-admission-2023',
      content: 'Hello  world',
      category: 'news',
      author: 'Yusuf Olosan'
    },
    {
      image: 'Teachers-School-Front',
      content: 'H',
      category: 'news',
      author: 'Yusuf Olosan'
    },
    {
      image: 'parading-with-guns',
      content: 'Parading with guns',
      category: 'news',
      author: 'Yusuf Olosan'
    },
    {
      image: 'Students-Strolling-2',
      content: 'Yesufu Olosan',
      category: 'news',
      author: 'Yusuf Olosan'
    }
  ])
  return { data }
})
