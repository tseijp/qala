# 🎨@tsei/qala

<a href="https://qala.tsei.jp">
  <img src="https://qala.tsei.jp/readme.gif"></img>
</a>

<details>
<summary>

It provides detailed instructions on installation,
a walkthrough of the application structure, and code snippets for better understanding.

</summary>

インストール方法、アプリケーション構造の説明、コードスニペットなど、詳細な説明を提供します。

</details>

## Table of Content

- [Installation](#installation)
- [Start App](#start-app)
- [Setup App](#setup-app)
- [Component Structure](#component-structure)
- [Dependency List](#dependency-list)

## Installation

<details>
<summary>

Clone the repository to your local machine.

</summary>

ローカルマシンにリポジトリをクローンします。

</details>

```ruby
git clone https://github.com/tseijp/qala
npm install
```

## Start App

<details>
<summary>

The `QALA | Mancala App` comes with a set of predefined scripts in the `package.json` file.
Here is how you can use these scripts:

</summary>

`QALA | Mancala App` には、`package.json` ファイルにあらかじめ定義された一連のスクリプトが付属しています。
以下に各スクリプトが何をするのかの簡単な説明を記載します：

</details>

```ruby
# Run the development server
npm run dev

# Build the production version
npm run build
```

## Setup App

<details>
<summary>

The main application is set up in the `src/main.tsx` file.

</summary>

メインのアプリケーション は `src/main.tsx` ファイルで設定されています。

</details>

```tsx
createRoot(document.getElementById('root') as HTMLElement).render(
  <Canvas
    camera={{ position: [0, 10, 1.8] }}
    style={{ top: 0, left: 0, position: 'fixed' }}
    gl={{ localClippingEnabled: true }}
    shadows
  >
    <pointLight position={[10, 10, 10]} castShadow />
    <ambientLight />
    <color attach="background" args={['#884D1B']} />
    <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} />
    <Suspense>
      <App />
    </Suspense>
    <Suspense>
      <Floor />
    </Suspense>
  </Canvas>
)
```

## Component Structure

<details>
<summary>

It uses the `Physics` component from `@react-three/rapier` to handle game physics,
and `Stage` component from `@react-three/drei` to create a 3D stage for our game.
Within this `Game` component, game logic exist.

</summary>

ゲームの物理を処理するために `@react-three/rapier` の `Physics` コンポーネントを、
ゲームの 3D ステージを作成するために `@react-three/drei` の `Stage` コンポーネントを使用します。
この `Game` コンポーネントの中には、ゲームのロジックが存在します。

</details>

```tsx
export const App = () => (
  <Physics timeStep={1 / 128}>
    <Stage adjustCamera={0.75} preset="upfront" environment={null}>
      <Game>
        <Just />
        <Score />
        <Steal />
        <Board />
      </Game>
    </Stage>
  </Physics>
)
```

## Dependency List

<details>
<summary>

The `QALA | Mancala App` uses a series of dependencies for its functionality.

</summary>

`QALA | Mancala App` は、その機能のために一連の依存関係を使用しています。

</details>

![csg](https://img.shields.io/npm/v/@react-three/csg?style=flat&colorA=000000&colorB=000000)
@react-three/csg@2.2.0

![drei](https://img.shields.io/npm/v/@react-three/drei?style=flat&colorA=000000&colorB=000000)
@react-three/drei@9.70.0

![fiber](https://img.shields.io/npm/v/@react-three/fiber?style=flat&colorA=000000&colorB=000000)
@react-three/fiber@8.12.0

![rapier](https://img.shields.io/npm/v/@react-three/rapier?style=flat&colorA=000000&colorB=000000)
@react-three/rapier@1.0.0

![gsap](https://img.shields.io/npm/v/gsap?style=flat&colorA=000000&colorB=000000)
gsap@3.11.5

![ncp](https://img.shields.io/npm/v/nice-color-palettes?style=flat&colorA=000000&colorB=000000)
nice-color-palettes@^3.0.0

![react](https://img.shields.io/npm/v/react?style=flat&colorA=000000&colorB=000000)
react@18.2.0

![react-dom](https://img.shields.io/npm/v/react-dom?style=flat&colorA=000000&colorB=000000)
react-dom@18.2.0

![reev](https://img.shields.io/npm/v/reev?style=flat&colorA=000000&colorB=000000)
reev@0.10.0

![three](https://img.shields.io/npm/v/three?style=flat&colorA=000000&colorB=000000)
three@0.151.3
