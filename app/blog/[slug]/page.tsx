"use client"

export const dynamic = "force-dynamic";

import { useParams } from "next/navigation"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"

// ✅ Your blog list (copy from BlogPage for now)
const blogPosts = [
    {
    id: 1,
    title: "Importance of technological literacy and liberation",
    author: "Sarzil Hossain",
    designation: "GS-2024-25",
    batch: "HSC-2025",
    date: "1 January 2025",
    category: "technological literacy",
    content: `Motive
#
This article showcases the necessity to increase our knowledge and make use of our intellect before it is too late.

Summary
#
The purpose of learning about technology is not only to acquire skills (Any skill can be aquired any point in life by dedicating time), but to understand, question, and investigate the entity that has gained complete control over our lives.

Our life depends on tech
#
Many people just disregard technology, IT as insignificant fields. But that is far from the truth. Technology at present is literally our life.

Communication: Using software like Messenger, WhatsApp, Discord to speak to your friends and relatives.
Cloud Storage: Storing all your images, files, data on “free”/paid cloud providers like Google Drive, iCloud.
Source of information: Acquiring all news, articles, blog posts online.
Entertainment: Watching YouTube videos, Twitch streams, scrolling social media.
Education: Online classes, online exams, online courses, discussion groups.
Work: The software you use, the money you earn (cards/crypto), the way you apply for jobs (unless you do manual labor).
Photography: Taking photos of everything you do, everyone you meet, every food you eat.
All our activities that used be done manually in the past moved on the internet. Therefore, whoever you are, whatever your profession might be, your life and the life of everyone around you depends on tech.

Issue with blind use of tech
#
These are only, a few of the social issues (ignoring other aspects) of trchnology in our lives. The following points are self-evident from observation:

Loss of capabilities: As our life continues to become easier, we will forget how to do difficult things manually. For example, air fryers remove the necessity of cooking. How do you project people’s ability to cook food in future? Already many people just order food online. Think of examples in other fields.
Decreasing social skills: People, specially, those in the newer generation are becoming anti-social, that is they no longer know how to communicate. Ask your parents/grandparents if such a thing existed in their period. People are more alone and miserable than ever.
Necessity of constant dopamine: A significant portion of our generation need to scroll social medias whole day, have earphones plugged into their ears. It is severely harmful for our mental and physical health. A study conducted by Professor D. Adams at Uconn showcases there is a 70% higher chance of getting schizophernia in teenagers who use mobile phones for more than 4 hours a day.
Increased possibility of faking informatiom: Do you know that I made up the previous statistic? You probably believed me without any research. Because of the internet, it is much easier to spread false information much faster. And even then, many research papers can be falsified which people accept as arguments without question.
Demoralization: Morality, ethics are decreasing, and corruptive behavior and practices are entering in “our” culture. Do kids in our age have same level of respect towards our mentors like our past generations did?
Worst of all, social media and video game addiction and other things are becoming normalized in our society. Which means, even if you want to escape from the postive feedback loop, you might not have anyone to support you. Even many parents who spoke against mobile phones in past spend a significant porion of their time on the internet.

If you think you are free from these issues/if you ignore these issues/if you just decide to ignore these tjings and keep doing your job, maybe even run a huge startup after graduating from Harvard, these issues would still exist and affect you or your kids or their kids, unless we acquire knowledge about it and try to stop it.

Solution
#
Society isn’t developed by paranoids. It’s developed by individuals who can think clearly and critically. Whether you agree with us or not, you have to think about these issues deeply and try to come to your own conclusions.

The first step of the solution is to gain knowledge about tech. But the knowledge shouldn’t just be to “setup X” or “do Y” but also knowledge about the overall impact of “Z” in our lives. Because technology, in its present state, has the capability to directly influence our beliefs and even culture and for decades have served as a political weapon for whatever party that carries it.`,
  },
 {
    id: 2,
    title: "Introduction to GitHub : Part 1",
    author: "Mahdi Mohammad",
    designation: "President 2024-25",
    batch: "HSC-2025",
    date: "3 January 2025",
    category: "github",
    content: `আমরা Google Drive এ ছবি কিংবা ভিডিও save করে রাখি । সেটা সংরক্ষিতও থাকে সহজে share-ও করা যায় । প্রোগ্রামারদের Google Drive হলো GITHUB

Welcome to learning GitHub.

GitHub what?
#

GitHub মূলত একটা “ভান্ডার” যেখানে কোড রাখা হয়। আবার অনেকজন একসাথে একই প্রজেক্টে কোডিং করতে চাইলে যার যার ডেস্কটপে কোড লিখে এরপর GitHub এ রেখে দেয়া যায় - এ ব্যপারটা ম্যানেজ করার চমৎকার ব্যবস্থা আছে ওখানে । নিজের ডেস্কটপকে বলা হয় Local Environment - আর GitHub এর যে ফোল্ডারে এগুলো সেইভ থাকে সেটা Remote Environment ।

Git এবং GitHub সেটআপ করা
#
প্রথমেই আমাদের Git এবং GitHub সেটআপ করতে হবে।

Git ইনস্টল করো (Windows):
#
Git অফিশিয়াল সাইটে যাও।
Download অপশন ক্লিক করে ইন্সটল করো।
ইন্সটল শেষে Command Prompt খুলে নিচের কমান্ড লিখে চেক করো:
git --version
যদি version নম্বর দেখায়, তাহলে ঠিকঠাক ডাউনলোড হয়েছে ! (যদি না দেখায় তাহলে Google করে সমস্যার সমাধান বের করো )

GitHub অ্যাকাউন্ট তৈরি করো:
#
GitHub এর ওয়েবসাইটে যাও।
“Sign up” এ ক্লিক করে তোমার অ্যাকাউন্ট তৈরি করো।
Repository কী?
#
Repository = Folder একটা নির্দিষ্ট প্রজেক্টের সব files আর folders যে বড় ফোল্ডারটার ভিতর থাকে তাকেই Repository বলে ।

Repo তৈরি করার নিয়ম:
#
GitHub এ ঢোকার পর ডানদিকে উপরে “New” বাটনে ক্লিক করো।
একটা নাম দাও। যেমন: my-first-folder
Description এ কিছু একটা লিখে Create repository ক্লিক করো।
এখন তুমি এখানে কোডের file বা files রাখতে পারবে।

Repo তে কোড রাখাঃ
#
Repo create সম্পন্ন হলে GitHub একটা পেইজ দেখাবে, যেখানে থাকে step-by-step গাইড যা তোমাকে বলে কিভাবে তোমার লোকাল এনভায়রনমেন্ট এর প্রজেক্ট GitHub এ আপলোড করবে। চল এগুলোকে সহজভাবে ব্যাখ্যা করি।

প্রথমে তোমার কম্পিউটারের যে ফোল্ডারের ফাইলস গুলো repo তে রাখতে চাও সে ফোল্ডারে গিয়ে Terminal open করো । এরপর ->

1️⃣ Initialize a Git Repository:
#
git init
🎩 কী হচ্ছে: তোমার ফোল্ডারটাকে একটা Git প্রজেক্ট বানিয়ে নিচ্ছো।

2️⃣ Add Files
#
git add .
🎩 কী হচ্ছে: সব ফাইলকে Git এর কাছে জানিয়ে দিচ্ছো যে এগুলো track করতে হবে।

3️⃣ Commit Your Changes:
#
git commit -m "Initial commit"
🎩 কী হচ্ছে: তুমি তোমার কাজ সেভ করে রাখছো।

4️⃣ Connect to GitHub Repository:
#
git branch -M main
git remote add origin <repo_url>
🎩 কী হচ্ছে: তুমি তোমার লোকাল প্রজেক্টকে GitHub এর সাথে লিঙ্ক করছো। <repo_url > এর জায়গায় GitHub এর পেইজে যে লিঙ্ক দেয়া থাকবে তা দিতে হবে ।

5️⃣ Push to GitHub:
#
git push -u origin main
🎩 কী হচ্ছে: GitHub এ আপলোড হয়ে যাচ্ছে।

Repo Clone করা
#
ধরো, অন্যের কোড তুমি ব্যবহার করতে চাও । GitHub থেকে Repo ক্লোন করে সেটাই করা হয়।

Command:
#
git clone <repo_url>
💡 উদাহরণ:

git clone https://github.com/your-username/my-first-repo.git
এই কমান্ড দিলে Repo-এর একটা কপি তোমার কম্পিউটারে চলে আসবে।

প্রাথমিক জ্ঞান সমাপ্ত ~`,
  },
  {
    id: 3,
    title: "Introduction to GitHub : Part 2",
    author: "Mahdi Mohammad",
    designation: "President 2024-2025",
    batch: "HSC-2025",
    date: "3 January 2025",
    category: "Web Development",
    content: `Step 1: Repo Clone করা
#
যেই repo তে তুমি কাজ করতে চাও, সেটা তোমার local machine এ নামিয়ে নিতে হবে।

Command:
#
git clone <repo_url>
Step 2: Repo Folder এ যাও (cd মানে Change Directory)
#
Command:
#
cd <repo_name>
💡 উদাহরণ:

cd awesome-repo
Step 3: নতুন Branch তৈরি করো
#
Main branch এ কাজ না করে নিজের একটা নতুন branch বানিয়ে নাও। এতে তোমার কাজ আলাদা থাকবে।

Command:
#
git checkout -b <branch_name>
💡 উদাহরণ:

git checkout -b feature/add-cool-feature
কেন?

Step 4: Code এ কাজ করো
#
এখন তোমার পছন্দের code editor খুলে, যেটা করতে চাও সেটা করো। নতুন feature যোগ করো, bug ঠিক করো, documentation update করো। নিজের মত করে কাজ করো।

Step 5: Status Check করো (দেখো কী কী বদল করেছো)
#
দেখে নাও কোন কোন ফাইল modify হয়েছে।

Command:
#
git status
এই command দিলে modified, added, বা deleted ফাইলগুলো সব দেখাবে।

Step 6: Changes Stage করো
#
Command:
#
git add .
💡 টিপস: . মানে সব ফাইল একবারে stage করা হবে। নির্দিষ্ট কোন ফাইল stage করতে চাইলে ফাইলের নাম লিখো।

তোমার changes save করার জন্য একটা meaningful commit message দিয়ে commit করতে হবে।

Command:
#
git commit -m "তোমার commit message"
💡 উদাহরণ:

git commit -m "Added a new feature to improve user experience"
🎨 Commit Message Tips: Commit message যেন স্পষ্ট হয়। “fixed stuff” টাইপের vague message কেউ পছন্দ করবে না।

🚀 Step 8: তোমার Branch GitHub এ Push করো
#
এখন তোমার branch remote repository তে push করো।

Command:
#
git push origin <branch_name>
💡 উদাহরণ:

git push origin feature/add-cool-feature
Step 9: GitHub এ Pull Request (PR) ওপেন করো
#
GitHub repo তে তোমার branch এ যাও।
একটা notification দেখতে পাবে: “Compare & pull request”। সেটা ক্লিক করো।
PR এর জন্য একটা title আর description লিখো।
Create pull request বাটনে ক্লিক করো।
এখন maintainer তোমার কাজ review করে merge করবে।

Quick Recap
#
Clone the repo: git clone <repo_url>
Folder এ যাও: cd <repo_name>
নতুন branch তৈরি করো: git checkout -b <branch_name>
কোড এ কাজ করো।
Changes stage করো: git add .
Commit করো: git commit -m "message"
GitHub এ push করো: git push origin <branch_name>
Pull Request ওপেন করো।`,
  },

{
    id: 4,
    title: "Getting Started with React 19: A Modern Approach to Building Faster and Simpler Web Interfaces",
    author: "Arian Aas Sami",
    designation: "General Secretary-2025-2026",
    batch: "HSC-2026",
    date: "4 November 2025",
    category: "CSS",
    content: `React 19 represents a significant evolution in the React ecosystem,
    focused on simplifying development and improving performance. One of the most
    notable advancements is the new React Compiler, which automatically optimizes
    components so developers no longer have to rely heavily on performance helpers like useMemo and useCallback.
    This allows for cleaner, more readable code. Additionally, React 19 officially supports React Server Components,
    enabling parts of the UI to be rendered directly on the server. This reduces JavaScript bundle size and speeds up
    page loads, especially useful for large or data-heavy applications. The update also introduces new hooks, such as
    useActionState for handling forms and async requests more easily, useOptimistic for instant UI updates before server
    confirmation, and the use() hook for directly working with asynchronous data inside components. With smoother integration
    into tools like Vite and frameworks such as Next.js, getting started with React 19 is more straightforward than ever.
    Overall, React 19 preserves React’s well-loved component-based design but streamlines workflows, improves efficiency,
    and offers faster,
    more dynamic web experiences for users and developers alike.`,
  },  

  {
    id: 5,
    title: "Getting Started with Adobe Photoshop: A Beginner’s Guide to Creative Image Editing",
    author: "Arian Aas Sami",
    designation: "General Secretary-2025-2026",
    batch: "HSC-2026",
    date: "4 November 2025",
    category: "Content Creation",
    content: `Adobe Photoshop is a professional-grade image editing software that enables
    users to enhance photos, design graphics, and create original artwork with precision and
    flexibility. For beginners, the workspace may look complex at first, but learning the basic structure
    makes everything easier. The Toolbar located on the left contains essential tools such as the Move Tool for 
    positioning elements, the Brush Tool for painting and digital drawing, the Eraser for corrections, and the
    Selection Tools (like Marquee, Lasso, and Quick Selection) for isolating parts of an image. At the center
    is the Canvas, where you see and work on your image. On the right side, the Layers Panel plays a crucial
    role—each element can exist on its own layer, allowing you to edit and adjust parts of a design without
    damaging the original image. Layers can be renamed, reordered, grouped, locked, and blended to create 
    complex effects. Beginners also benefit from learning Adjustment Layers, which include tools like Brightness/Contrast,
    Hue/Saturation, Curves, and Selective Color—these allow for color correction and tone balancing while keeping the original
    image unchanged. Photoshop also offers Filters for adding artistic effects or enhancing sharpness and clarity. As you 
    progress, concepts like Layer Masks, Smart Objects, Blending Modes, and Non-Destructive Editing become essential for
    making clean, professional-level edits. Whether you are retouching portraits, designing posters, creating social media
    graphics, or experimenting with digital painting, Photoshop encourages creativity through layering, experimentation,
    and precise control. With practice and exploration, beginners can transform simple images into polished
    visual compositions and gradually build a strong understanding of digital design.`,
  },  
  // ✅ continue adding the rest of your blogPosts...
]

export default function SingleBlogPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.id.toString() === slug)

  if (!post) {
    return (
      <main className="min-h-screen bg-black text-foreground flex justify-center items-center">
        <h1 className="text-2xl text-gold">Post not found</h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-foreground">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gold mb-6">{post.title}</h1>

        <p className="text-gold/70 text-sm mb-6">
          {post.author} • {post.designation} ({post.batch}) • {post.date}
        </p>

        <p className="leading-relaxed text-gold/80 whitespace-pre-line">
          {post.content}
        </p>

        <div className="mt-10">
          <Button
            variant="outline"
            className="btn-glow-secondary"
            onClick={() => history.back()}
          >
            ← Back
          </Button>
        </div>
      </div>
    </main>
  )
}
