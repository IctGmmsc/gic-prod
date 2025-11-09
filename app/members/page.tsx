"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

const members = [
  { id: 1, name: "Al Muhaimin Kaif", studentId: "250472", section: "Proton", class: "XI" },
  { id: 2, name: "Shuvagata Barman Niloy", studentId: "250460", section: "Electron", class: "XI" },
  { id: 3, name: "Mir Reshat Shahariar", studentId: "250802", section: "Neutron", class: "XI" },
  { id: 4, name: "Abdullah Bin Shahid", studentId: "250447", section: "Electron", class: "XI" },
  { id: 5, name: "MD. Faiyaz Javed", studentId: "250246", section: "Electron", class: "XI" },
  { id: 6, name: "Sajjadul Islam", studentId: "250871", section: "Neutron", class: "XI" },
  { id: 7, name: "Shadman Lazim", studentId: "250800", section: "Neutron", class: "XI" },
  { id: 8, name: "Jawadul Islam Jiyad", studentId: "250893", section: "Neutron", class: "XI" },
  { id: 9, name: "MD. Zunaidul Islam", studentId: "250337", section: "Electron", class: "XI" },
  { id: 10, name: "Nihal Rahman Tasnim", studentId: "250398", section: "Electron", class: "XI" },
  { id: 11, name: "Md. Mafil Azad", studentId: "250607", section: "Proton", class: "XI" },
  { id: 12, name: "Md Abid Hasan", studentId: "250393", section: "Electron", class: "XI" },
  { id: 13, name: "Tahmid Arlam Nihal", studentId: "250454", section: "Electron", class: "XI" },
  { id: 14, name: "MD. Minhaz", studentId: "250358", section: "Electron", class: "XI" },
  { id: 15, name: "MD. Nafi Bhuyian", studentId: "250513", section: "Proton", class: "XI" },
  { id: 16, name: "Mainul Islam", studentId: "250511", section: "Mollika", class: "XI" },
  { id: 17, name: "Alif Ibrahim", studentId: "250277", section: "Mollika", class: "XI" },
  { id: 18, name: "Khandoker Fozley Akbar", studentId: "250339", section: "Electron", class: "XI" },
  { id: 19, name: "Mohammod Shuvo", studentId: "250678", section: "Neutron", class: "XI" },
  { id: 20, name: "Samin Yasar", studentId: "250680", section: "Neutron", class: "XI" },
  { id: 21, name: "Ali Imam Tayeb", studentId: "250663", section: "Neutron", class: "XI" },
  { id: 22, name: "Shaian Al Eshan", studentId: "250311", section: "Electron", class: "XI" },
  { id: 23, name: "Abdur Rahman Awof", studentId: "250360", section: "Electron", class: "XI" },
  { id: 24, name: "Mohammad Mahin Rahman", studentId: "250606", section: "Proton", class: "XI" },
  { id: 25, name: "Miad Islam", studentId: "250906", section: "Neutron", class: "XI" },
  { id: 26, name: "Syed Zafir Jahid Arco", studentId: "250332", section: "Electron", class: "XI" },
  { id: 27, name: "Jit Halder", studentId: "250372", section: "Electron", class: "XI" },
  { id: 28, name: "Mahibul Hasan", studentId: "250365", section: "Electron", class: "XI" },
  { id: 29, name: "Sadia Nawer Shumi", studentId: "250671", section: "Cornea", class: "XI" },
  { id: 30, name: "Prionti Gharami", studentId: "250876", section: "Cornea", class: "XI" },
  { id: 31, name: "Samprity Toma", studentId: "250348", section: "Retina", class: "XI" },
  { id: 32, name: "Nadira Akter Mani", studentId: "250878", section: "Cornea", class: "XI" },
  { id: 33, name: "Samia Islam Dola", studentId: "250351", section: "Retina", class: "XI" },
  { id: 34, name: "Lamisa Muntaha", studentId: "250382", section: "Retina", class: "XI" },
  { id: 35, name: "Jannat Akter Soshi", studentId: "250761", section: "Lily", class: "XI" },
  { id: 36, name: "Arohi Baidya Payel", studentId: "250887", section: "Cornea", class: "XI" },
  { id: 37, name: "Nowrin Jaman", studentId: "250391", section: "Retina", class: "XI" },
  { id: 38, name: "Fahmida Akter", studentId: "250389", section: "Retina", class: "XI" },
  { id: 39, name: "Mst. Fatema Akter", studentId: "250752", section: "Lily", class: "XI" },
  { id: 40, name: "Mou Akter", studentId: "250572", section: "Parijat", class: "XI" },
  { id: 41, name: "Nishat ahan Maisha", studentId: "250433", section: "Lily", class: "XI" },
  { id: 42, name: "Taslima Akter Ratry", studentId: "250303", section: "Retina", class: "XI" },
  { id: 43, name: "Zannatul Fardous Khan Keka", studentId: "250541", section: "Retina", class: "XI" },
  { id: 44, name: "Malaika Sheen", studentId: "250484", section: "Lily", class: "XI" },
  { id: 45, name: "Malala", studentId: "250269", section: "Retina", class: "XI" },
  { id: 46, name: "Tasbiha Muosina Snaha", studentId: "250452", section: "Retina", class: "XI" },
  { id: 47, name: "Tarnuva Shahira Nuha", studentId: "250237", section: "Cornea", class: "XI" },
  { id: 48, name: "Naheda Yeasmin", studentId: "250328", section: "Retina", class: "XI" },
  { id: 49, name: "Fahmida Jahan", studentId: "250627", section: "Lily", class: "XI" },
  { id: 50, name: "Sadia Islam", studentId: "250512", section: "Cornea", class: "XI" },
  { id: 51, name: "Sadia Akter Srigdha", studentId: "250716", section: "Lily", class: "XI" },
  { id: 52, name: "Maria Akter", studentId: "250817", section: "Cornea", class: "XI" },
  { id: 53, name: "Tawhida Islam", studentId: "250785", section: "Cornea", class: "XI" },
  { id: 54, name: "Anushka Mojumder", studentId: "250464", section: "Cornea", class: "XI" },
  { id: 55, name: "Rukaia Anam", studentId: "250359", section: "Science", class: "XI" },
  { id: 56, name: "Somiya Akter", studentId: "250219", section: "Lily", class: "XI" },
  { id: 57, name: "Tania Akter", studentId: "250247", section: "Lily", class: "XI" },
  { id: 58, name: "Nushrat Iqbal Lira", studentId: "250856", section: "Retina", class: "XI" },
  { id: 59, name: "Jannatul Mottakina", studentId: "250241", section: "Cornea", class: "XI" },
  { id: 60, name: "Samiya Akter", studentId: "250622", section: "Retina", class: "XI" },
  { id: 61, name: "Nafisa Rahman", studentId: "250766", section: "Lily", class: "XI" },
  { id: 62, name: "Nishat Tasnim", studentId: "250266", section: "Lily", class: "XI" },
  { id: 63, name: "Miftahul Jannat Prapti", studentId: "250567", section: "Lily", class: "XI" },
  { id: 64, name: "Mim", studentId: "250334", section: "Lily", class: "XI" },
  { id: 65, name: "Mohamaya Khan Sanchita", studentId: "250563", section: "Lily", class: "XI" },
  { id: 66, name: "Afifa Islam", studentId: "250576", section: "Lily", class: "XI" },
  { id: 67, name: "Shamima israt Nafisa", studentId: "250578", section: "Retina", class: "XI" },
  { id: 68, name: "Sanjida Akter", studentId: "250868", section: "Retina", class: "XI" },
  { id: 69, name: "Tahsina Islam", studentId: "250568", section: "Lily", class: "XI" },
  { id: 70, name: "Saniya Akter", studentId: "250573", section: "Lily", class: "XI" },
  { id: 71, name: "Jannatul Ferdaous Bristy", studentId: "250279", section: "Lily", class: "XI" },
  { id: 72, name: "Tahsin Naowar", studentId: "250275", section: "Retina", class: "XI" },
  { id: 73, name: "Tahsina Jannat Sneha", studentId: "250183", section: "Retina", class: "XI" },
  { id: 74, name: "Tahmin Ibn Mahfuz", studentId: "220361", section: "Palash", class: "IV" },
  { id: 75, name: "M. Andalib Rahman", studentId: "250181", section: "Neptune", class: "IX" },
  { id: 76, name: "Munem Kabir", studentId: "190480", section: "Palash", class: "IV" },
  { id: 77, name: "Ahmed Wasif Shadman", studentId: "220002", section: "Neptune", class: "IX" },
  { id: 78, name: "Saad Ibn Rouf Biswas", studentId: "230072", section: "Chapa", class: "VI" },
  { id: 79, name: "Arin Sikder", studentId: "210342", section: "Silvia", class: "V" },
  { id: 80, name: "Kayef Takbir Khan", studentId: "210751", section: "Parrot", class: "VII" },
  { id: 81, name: "Mohaimenul Hasan", studentId: "210243", section: "Penguin", class: "VII" },
  { id: 82, name: "Ch. Zarif Muktasid", studentId: "210042", section: "Parrot", class: "VII" },
  { id: 83, name: "MD. Nafiz Kabir", studentId: "210327", section: "Pigeon", class: "VII" },
  { id: 84, name: "Taseen Muhammad Kabir", studentId: "210341", section: "Parrot", class: "VII" },
  { id: 85, name: "Md Zayan Habib", studentId: "210624", section: "Parrot", class: "VII" },
  { id: 86, name: "Sheikh Abdullah Al-Wasee", studentId: "210533", section: "Penguin", class: "VII" },
  { id: 87, name: "Mihal Al Rahman", studentId: "210429", section: "Pigeon", class: "VII" },
  { id: 88, name: "Wasif Shams", studentId: "190012", section: "Parrot", class: "IX" },
  { id: 89, name: "Syed Al Abraar ADI", studentId: "250149", section: "Neptune", class: "V" },
  { id: 90, name: "Md, Salim Sadman Chowdhury", studentId: "210188", section: "Silvia", class: "VII" },
  { id: 91, name: "Taky Edrak Drobon", studentId: "230064", section: "Parrot", class: "V" },
  { id: 92, name: "Mashriq Bin Zulfiqer", studentId: "210555", section: "Silvia", class: "VII" },
  { id: 93, name: "Farhan Shahreer", studentId: "250041", section: "Pegion", class: "VII" },
  { id: 94, name: "Samiul Islam", studentId: "250153", section: "Kamini", class: "III" },
  { id: 95, name: "Mohammad Azmin Hossain", studentId: "200196", section: "Polash", class: "VI" },
  { id: 96, name: "Ayaan Ehan", studentId: "21048", section: "Jamuna", class: "VII" },
  { id: 97, name: "Zarran Alam Rashwan", studentId: "200208", section: "Parrot", class: "VII" },
  { id: 98, name: "Md, Tamim Ahmed", studentId: "210692", section: "Meghna", class: "VII" },
  { id: 99, name: "Wasiq Aymaan", studentId: "221206", section: "Penguin", class: "VII" },
  { id: 100, name: "Shafoan Hossain", studentId: "200172", section: "Silvia", class: "VII" },
  { id: 101, name: "Inzum Rashid", studentId: "250122", section: "Meghna", class: "VII" },
  { id: 102, name: "Tanzil Ibn Hossain Jihan", studentId: "250138", section: "Silvia", class: "VII" },
  { id: 103, name: "Mohammad Yeasin Ahmed Rifat", studentId: "210203", section: "Penguin", class: "IX" },
  { id: 104, name: "Kazi Saan Ana Ridom", studentId: "210510", section: "Pigeon", class: "V" },
  { id: 105, name: "Ahnaf Reza", studentId: "210489", section: "Parrot", class: "VII" },
  { id: 106, name: "Ehsan Khan", studentId: "230061", section: "Silvia", class: "VII" },
  { id: 107, name: "Faaris Ahmed", studentId: "250092", section: "Penguin", class: "VII" },
  { id: 108, name: "Tahmid Hasan", studentId: "220115", section: "Pigeon", class: "VII" },
  { id: 109, name: "Towfiqur Rahman Rafi", studentId: "210592", section: "Parrot", class: "VII" },
  { id: 110, name: "Ahmed Zohayer Uzayer", studentId: "200067", section: "Chapa", class: "VII" },
  { id: 111, name: "S.M Muhtashin Rahman", studentId: "210248", section: "Chapa", class: "VII" },
  { id: 112, name: "Sayeb Morshed", studentId: "210689", section: "Koel", class: "VII" },
  { id: 113, name: "Ishan Wrick Dey", studentId: "210690", section: "Pigeon", class: "VII" },
  { id: 114, name: "Ishan Rivu Dey", studentId: "210725", section: "Pigeon", class: "VII" },
  { id: 115, name: "Ahnaf Tajowar Taj", studentId: "221204", section: "Parrot", class: "III" },
  { id: 116, name: "Zayed Al Mahin", studentId: "250123", section: "Chapa", class: "VI" },
  { id: 117, name: "MD: Fahim Faysal", studentId: "240639", section: "Koel", class: "VII" },
  { id: 118, name: "Manha Binte Manirul Islam", studentId: "210184", section: "Pigeon", class: "VIII" },
  { id: 119, name: "Nameer Anwar Rishan", studentId: "210383", section: "Kamini", class: "VII" },
  { id: 120, name: "Shedratul Shayeb Anas", studentId: "250091", section: "Chapa", class: "VIII" },
  { id: 121, name: "Rafsan Arafan", studentId: "210186", section: "Penguin", class: "VI" },
  { id: 122, name: "Mezbah Rahman", studentId: "221241", section: "Jamuna", class: "IV" },
  { id: 123, name: "Farzad Rahman", studentId: "221271", section: "Parrot", class: "V" },
  { id: 124, name: "Nafin Al Nafiue", studentId: "220324", section: "Pigeon", class: "V" },
  { id: 125, name: "Muhammad Saad", studentId: "240668", section: "Pigeon", class: "VIII" },
  { id: 126, name: "MD. Tawhidul Haque Mazumder", studentId: "230148", section: "Parrot", class: "VII" },
  { id: 127, name: "Mahin Faisal Efaj", studentId: "230068", section: "Chapa", class: "IV" },
  { id: 128, name: "Muhammad Abdullah Al Muttaki", studentId: "200072", section: "Koel", class: "IV" },
  { id: 129, name: "Abdur Rayan", studentId: "210007", section: "Pigeon", class: "VI" },
  { id: 130, name: "MD Tamjid Alham", studentId: "210681", section: "Parrot", class: "IV" },
  { id: 131, name: "Kazi Mashiyat Tahmid Priyam", studentId: "250132", section: "Chapa", class: "VI" },
  { id: 132, name: "Md. Affan Hoque Ahin", studentId: "230832", section: "Koel", class: "IV" },
  { id: 133, name: "Mohammad Jawad Hassan", studentId: "240721", section: "Kamini", class: "VI" },
  { id: 134, name: "Fariha Islam Rothoshi", studentId: "220146", section: "Pigeon", class: "IV" },
  { id: 135, name: "Abdullah Al Aayan", studentId: "250522", section: "Pigeon", class: "V" },
  { id: 136, name: "Sakibul Islam", studentId: "250637", section: "Parrot", class: "V" },
  { id: 137, name: "Maria Jannat", studentId: "250231", section: "Chapa", class: "VIII" },
  { id: 138, name: "Imran Hossain", studentId: "250867", section: "Koel", class: "VII" },
  { id: 139, name: "Sirajum Monira", studentId: "250580", section: "Pigeon", class: "VII" },
  { id: 140, name: "Arindam Sarkar Gorbo", studentId: "250835", section: "Pigeon", class: "VII" },
  { id: 141, name: "Nawshin Al Tasnim", studentId: "250862", section: "Parrot", class: "VII" },
  { id: 142, name: "Nawshin Al Tasnil", studentId: "250411", section: "Chapa", class: "VII" },
  { id: 143, name: "Jannatul Ferdous Tanjila", studentId: "250244", section: "Koel", class: "VII" },
  { id: 144, name: "Lamia Akter Remu", studentId: "250249", section: "Pigeon", class: "VII" },
  { id: 145, name: "Zarin Anjum Anika", studentId: "250320", section: "Parrot", class: "VII" },
  { id: 146, name: "Jawata Afrin", studentId: "250684", section: "Chapa", class: "V" },
  { id: 147, name: "Labiba Tasmia", studentId: "250307", section: "Koel", class: "III" },
  { id: 148, name: "Labiba Ibnat", studentId: "250874", section: "Pigeon", class: "VI" },
  { id: 149, name: "Akhi Akter Keya", studentId: "250437", section: "Pigeon", class: "VII" },
  { id: 150, name: "Sadia Afrin", studentId: "250336", section: "Parrot", class: "VIII" },
  { id: 151, name: "Muhatasin Ihsan Araf", studentId: "250083", section: "Chapa", class: "VII" },
  { id: 152, name: "Ninit Rahman Tabib", studentId: "250326", section: "Palash", class: "VII" },
  { id: 153, name: "Silviya Rahman Samiya", studentId: "230096", section: "Silvia", class: "VII" },
  { id: 154, name: "Khandokar Yeamin Mohammad", studentId: "220239", section: "Silvia", class: "VII" },
  { id: 155, name: "Nawer Ashrafi Jahin", studentId: "220312", section: "Jamuna", class: "V" },
  { id: 156, name: "Rabeya Jaman Ruku", studentId: "190910", section: "Parrot", class: "III" },
  { id: 157, name: "Nurjahan Haque Hridi", studentId: "250862", section: "Pigeon", class: "VI" },
  { id: 158, name: "Snigdha Islam", studentId: "250190", section: "Palash", class: "VII" },
  { id: 159, name: "Suraiya Rahman Maliha", studentId: "220287", section: "Shimul", class: "VIII" },
  { id: 160, name: "Fariha Ahmed Sara", studentId: "250383", section: "Golap", class: "VII" },
  { id: 161, name: "Tanha Akter Shapla", studentId: "250363", section: "Shimul", class: "VII" },
  { id: 162, name: "Jannatul Ferdius Julia", studentId: "250366", section: "Proton", class: "VII" },
  { id: 163, name: "Marufa Mostofa", studentId: "250917", section: "Cornea", class: "VII" },
  { id: 164, name: "Suraya Akter", studentId: "250681", section: "Electron", class: "VI" },
  { id: 165, name: "MD. Tawhid Islam Tamjid", studentId: "250566", section: "Proton", class: "IV" },
  { id: 166, name: "Omor Faruk", studentId: "250566", section: "Lily", class: "IV" }
]

const classes = ["All","XII", "XI", "X", "IX", "VIII", "VII", "VI", "V", "IV", "III"]

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterClass, setFilterClass] = useState("All")

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.section.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesClass = filterClass === "All" || member.class === filterClass
    return matchesSearch && matchesClass
  })

  return (
    <main className="min-h-screen bg-black text-foreground">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Members</span>
            </h1>
            <p className="text-lg text-gold/70 max-w-2xl mx-auto">
              Meet the talented individuals who make our community thrive
            </p>
          </div>

          {/* Search + Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gold/60" />
              <input
                type="text"
                placeholder="Search by name, ID, or section..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg glass border border-accent/30 text-gold focus:outline-none focus:border-accent transition"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {classes.map((cls) => (
                <button
                  key={cls}
                  onClick={() => setFilterClass(cls)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                    filterClass === cls
                      ? "btn-glow"
                      : "glass border border-accent/30 text-gold/70 hover:text-gold hover:border-accent/50"
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <div className="mb-6 text-center text-sm text-gold/60">
            Showing {filteredMembers.length} of {members.length} members
          </div>

          {/* Member Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className="glass-card card-hover p-5 animate-fade-in-up"
                style={{ animationDelay: `${index * 20}ms` }}
              >
                <h3 className="font-bold text-lg mb-3 text-gold">{member.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gold/60">ID:</span>
                    <span className="font-semibold text-gold">{member.studentId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gold/60">Section:</span>
                    <span className="font-semibold text-gold">{member.section}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gold/60">Class:</span>
                    <span className="text-accent font-semibold">{member.class}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gold/70 mb-4">No members found</p>
              <Button
                variant="outline"
                className="btn-glow-secondary bg-transparent"
                onClick={() => {
                  setSearchQuery("")
                  setFilterClass("All")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
