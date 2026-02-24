1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById: এটি শুধুমাত্র একটি সুনির্দিষ্ট ID যুক্ত এলিমেন্টকে রিটার্ন করে। এটি পারফরম্যান্সের দিক থেকে দ্রুততম।

getElementsByClassName: এটি একটি লাইভ HTMLCollection রিটার্ন করে যেখানে একই ক্লাসের সব এলিমেন্ট থাকে। এটি Array এর মতো মনে হলেও আসল Array নয়।

querySelector: এটি CSS সিলেক্টর ব্যবহার করে প্রথম যে এলিমেন্টটি পায় তা রিটার্ন করে। এটি অনেক বেশি ফ্লেক্সিবল।
