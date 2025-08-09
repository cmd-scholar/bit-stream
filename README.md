# BitStream 🎥⚡

BitStream is a Twitch-style streaming platform powered built on Stacks.
Creators can livestream and receive instant Bitcoin sBTC or STX tips without intermediaries.
Viewers can also watch saved videos hosted by creators on their own storage.

---

## 🚀 Features

- **Live Streaming**: Real-time streaming using a third-party service like Livepeer or Mux.
- **Instant sBTC/STX Tipping**: Send Bitcoin tips directly to streamers via Stacks smart contracts.
- **BYOS (Bring Your Own Storage)**: Creators host their own video recordings on services like IPFS, S3, or Storj.
- **Free or Paid Playback**: Creators can choose to make saved videos free or require payment to view.
- **No Intermediaries**: Direct creator-viewer interaction, instant settlement.

---

## 📂 Project Structure

```
bitstream/
├── app/                  # Next.js 15+ App Router
├── components/ui           # Shadcn UI components
├── lib/                   # Utilities and helpers
├── public/                # Static assets
└── README.md              # Project documentation
```

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript
- **UI Components**: shadcn/ui + Tailwind CSS
- **Blockchain**: Stacks smart contracts for sBTC tips
- **Streaming**: Livepeer / Mux API
- **Storage**: Creator-provided storage (IPFS, S3, etc.)

---

## ⚡ Getting Started

### Prerequisites

- Node.js >= 18
- npm / bun / yarn
- Livepeer or Mux API key
- Stacks wallet & testnet account

### Installation

```bash
git clone https://github.com/cmd-scholar/bit-streamcd bitstream
cd bit-stream
bun install
```

### Environment Variables

Create a `.env.local` file in the root with:

```
LIVEPEER_API_KEY=your_livepeer_key
STACKS_API_URL=https://stacks-node-api.testnet.stacks.co
```

### Run the development server

```bash
bun run dev
```

---

## 🎯 Roadmap

- [ ] Authentication
- [ ] Stream discovery page
- [ ] Chat system for streams
- [ ] sBTC/SYX tipping
- [ ] Creator BYOS video hosting
- [ ] Optional pay-per-view for recordings
- [ ] Live streaming MVP

---
