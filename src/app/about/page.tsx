import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        About undersleep7x (aka Emmanuel)
      </h1>

      <div className="space-y-6 text-primary">
        <Image
          src="/about_me.png"
          alt="About me photo"
          width="300"
          height="300"
          className="float-right ml-4 mb-4"
        />
        <div>
          <div className="flex items-center">
            <div className="flex flex-col justify-between">
              <h2 className="text-2xl font-bold mb-2">Rapid fire bio, go!</h2>
              <p>
                I&apos;m a 24 year old software engineer in New York City and I
                look like this. I like building things, like this blog, I write
                code on a Macbook Pro using Neovim (btw) and graduated from UNC
                Chapel Hill in 2023. I&apos;m always listening to music and you
                can find my play history here. Rust is cool, the brain is an
                enthralling mystery, I&apos;m still trying to beat Hollow
                Knight, and I truly have too many ideas in my head.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            Ok so? We all have ideas. Why are yours so special?
          </h2>
          <p>
            It&apos;s less that my ideas are special, rather, all ideas are
            powerful. I had an idea in college about living in NYC, and now
            I&apos;ve been in the city for almost 3 years. Becoming an engineer
            was an idea I had one night after feeling disillusioned with the
            idea of medical school, and now it&apos;s my career. Ideas are a
            part of the human experience that I&apos;ve come to appreciate
            deeply, and I&apos;m grateful I get to live in the power of my ideas
            every day.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            So how many baskets is your mental hand in?
          </h2>
          <p>
            There&apos;s a Youtube converter I&apos;m building with Rust as an
            avenue of learning, and because I got tired of having to always go
            to a random website to grab some content. Speaking of Youtube, a
            video about pihole found it&apos;s way onto my recommended page and
            now I&apos;ve got a homelab automating my file backups, hosting my
            own git instance, and running the Minecraft server I always wanted
            in middle school. The homelab is running Proxmox and I used the
            virtual machines to toy around with other Linux distros, now
            there&apos;s a laptop that serves as my Arch Linux nuclear testing
            ground in the corner of my room. Picking up more web development
            practice from building out websites for friends and family,
            exploring self-hosted AI servers now that the homelab bug has bitten
            me, nursing this insane idea of creating Venmo for cryptocurrencies,
            and another 3 open source projects I&apos;m working on that I&apos;m
            not ready to talk about yet. This blog is a project as well, custom
            built by myself using Neovim, which I just started learning and
            configuring in October 2025.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">.....Do you sleep?</h2>
          <p>No, hence the name.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            So why the blog? Seems too social for an Arch Linux/Neovim user
          </h2>
          <p>
            Fair point. There&apos;s a few reasons ranging from atrophying
            writing skills to boredom, if you can believe it. Fundamentally
            though, I wanted a place to share my experience. I&apos;m by no
            means some extreme unique circumstance, but my education, interests,
            and challenges have created an uncommon profile for the spaces I
            find myself learning, growing, and excelling in. I want this blog to
            serve as a trail for the journey I take; if not for others to follow
            and be inspired by, at least for my own reflection. Like journaling,
            except I spent a weekend building a blog instead of buying a
            notebook from Dollar Tree.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Anything else?</h2>
          <p>
            I played basketball in high school and met Penny Hardaway at a camp
            one summer. He said I was nice.
          </p>
        </div>
      </div>
    </div>
  );
}
