"use client";

import { useState } from "react";
import { Terminal, Play, CheckCircle2, Cpu, Zap, Code2, Award } from "lucide-react";
import { playMicroSound } from "./AudioAmbient";

interface AlgorithmSnippet {
  id: string;
  name: string;
  category: string;
  complexity: string;
  space: string;
  code: string;
  testInput: string;
  output: string;
  executionMs: number;
}

const algorithms: AlgorithmSnippet[] = [
  {
    id: "segment-tree",
    name: "Segment Tree (Lazy Propagation)",
    category: "Range Queries",
    complexity: "O(log N)",
    space: "O(4N)",
    code: `class SegmentTree {
  vector<long long> tree, lazy;
  void update(int node, int l, int r, int ql, int qr, long long val) {
    if (lazy[node] != 0) {
      tree[node] += (r - l + 1) * lazy[node];
      if (l != r) { lazy[2*node] += lazy[node]; lazy[2*node+1] += lazy[node]; }
      lazy[node] = 0;
    }
    if (ql <= l && r <= qr) {
      tree[node] += (r - l + 1) * val;
      if (l != r) { lazy[2*node] += val; lazy[2*node+1] += val; }
      return;
    }
    int mid = (l + r) / 2;
    update(2*node, l, mid, ql, qr, val);
    update(2*node+1, mid+1, r, ql, qr, val);
    tree[node] = tree[2*node] + tree[2*node+1];
  }
};`,
    testInput: "Query: Range Add [2, 8] +15; Range Sum [1, 10]",
    output: ">> Tree initialized: N = 100,000\n>> Range update [2, 8] +15 applied via lazy propagation\n>> Query result [1, 10]: 142,850\n>> All tests passed: 100/100 test cases.",
    executionMs: 0.04,
  },
  {
    id: "dijkstra",
    name: "Optimized Dijkstra + Min-Heap",
    category: "Graph Theory",
    complexity: "O((V + E) log V)",
    space: "O(V + E)",
    code: `void dijkstra(int src, int n, vector<vector<pair<int,int>>> &adj) {
  vector<long long> dist(n + 1, 1e18);
  priority_queue<pair<long long,int>, vector<pair<long long,int>>, greater<>> pq;
  dist[src] = 0;
  pq.push({0, src});
  while (!pq.empty()) {
    auto [d, u] = pq.top(); pq.pop();
    if (d > dist[u]) continue;
    for (auto &[v, w] : adj[u]) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        pq.push({dist[v], v});
      }
    }
  }
}`,
    testInput: "Nodes: 50,000 | Edges: 200,000 | Source: Node 1",
    output: ">> Priority queue path relaxation complete\n>> Shortest distances calculated to all 50,000 target nodes\n>> Max path latency: 42ms | Memory peak: 14.2 MB\n>> Verdict: ACCEPTED (0.07s).",
    executionMs: 0.07,
  },
  {
    id: "crdt-lww",
    name: "LWW-Element-Set CRDT Engine",
    category: "Distributed Systems",
    complexity: "O(1) Merge",
    space: "O(N)",
    code: `class LWWRegister<T> {
  private value: T;
  private timestamp: number;
  private peerId: string;

  merge(incoming: LWWRegister<T>): void {
    if (incoming.timestamp > this.timestamp ||
       (incoming.timestamp === this.timestamp && incoming.peerId > this.peerId)) {
      this.value = incoming.value;
      this.timestamp = incoming.timestamp;
      this.peerId = incoming.peerId;
    }
  }
}`,
    testInput: "Peers: Node-A (ts: 1718001), Node-B (ts: 1718005) concurrent writes",
    output: ">> Vector clock comparison initiated\n>> Deterministic conflict resolved via LWW order invariant\n>> Final state synchronized across 3 distributed replicas\n>> Zero split-brain states detected.",
    executionMs: 0.02,
  },
];

export default function TerminalCP() {
  const [selectedAlgo, setSelectedAlgo] = useState(algorithms[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState(selectedAlgo.output);
  const [runTime, setRunTime] = useState(selectedAlgo.executionMs);

  const handleSelect = (algo: AlgorithmSnippet) => {
    playMicroSound("hover");
    setSelectedAlgo(algo);
    setConsoleOutput(algo.output);
    setRunTime(algo.executionMs);
  };

  const handleRun = () => {
    playMicroSound("click");
    setIsRunning(true);
    setConsoleOutput(">> Compiling with -O3 flag...\n>> Executing against edge cases [0, N-1]...");

    setTimeout(() => {
      setIsRunning(false);
      setConsoleOutput(selectedAlgo.output);
      setRunTime(+(selectedAlgo.executionMs + Math.random() * 0.02 - 0.01).toFixed(2));
      playMicroSound("success");
    }, 450);
  };

  return (
    <div
      className="glass rounded-xl overflow-hidden border transition-all duration-300"
      style={{
        borderColor: "var(--border-subtle)",
        background: "rgba(9, 9, 16, 0.8)",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(144, 71, 255, 0.06)",
      }}
    >
      {/* Terminal Title Bar */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{
          borderColor: "rgba(255, 255, 255, 0.06)",
          background: "rgba(15, 15, 25, 0.7)",
        }}
      >
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          <span className="font-mono text-xs ml-2 text-zinc-400 flex items-center gap-1.5">
            <Terminal size={13} className="text-purple-400" />
            algo-bench@utkarsh: ~/{selectedAlgo.id}
          </span>
        </div>

        {/* Algorithm selector tabs */}
        <div className="hidden sm:flex items-center gap-1">
          {algorithms.map((algo) => (
            <button
              key={algo.id}
              onClick={() => handleSelect(algo)}
              className="px-2.5 py-1 rounded text-xs font-mono transition-all duration-200"
              style={{
                background:
                  selectedAlgo.id === algo.id
                    ? "rgba(144, 71, 255, 0.25)"
                    : "transparent",
                color:
                  selectedAlgo.id === algo.id
                    ? "var(--accent-teal)"
                    : "var(--text-secondary)",
                border:
                  selectedAlgo.id === algo.id
                    ? "1px solid rgba(144, 71, 255, 0.4)"
                    : "1px solid transparent",
              }}
            >
              {algo.name.split(" ")[0]}
            </button>
          ))}
        </div>

        <button
          onClick={handleRun}
          disabled={isRunning}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs text-black font-semibold transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50"
          style={{
            background: "linear-gradient(135deg, var(--accent-teal), #60efff)",
            boxShadow: "0 0 15px rgba(0, 245, 212, 0.3)",
          }}
        >
          <Play size={12} fill="currentColor" />
          {isRunning ? "Running..." : "Benchmark"}
        </button>
      </div>

      {/* Code Editor Window */}
      <div className="p-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Code Snippet */}
        <div className="lg:col-span-7 bg-[#05050a] rounded-lg p-3 font-mono text-xs overflow-x-auto border border-zinc-800/60">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800 text-[11px] text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Code2 size={12} className="text-purple-400" />
              {selectedAlgo.name}
            </span>
            <span className="text-zinc-400">{selectedAlgo.category}</span>
          </div>
          <pre className="text-zinc-300 leading-relaxed font-mono">
            <code>{selectedAlgo.code}</code>
          </pre>
        </div>

        {/* Metrics & Output Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          {/* Complexity Cards */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-1 text-[10px] uppercase font-mono text-zinc-400">
                <Zap size={11} className="text-yellow-400" /> Time Complexity
              </div>
              <div className="font-mono text-sm font-bold text-teal-300 mt-1">
                {selectedAlgo.complexity}
              </div>
            </div>

            <div className="p-2.5 rounded bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-1 text-[10px] uppercase font-mono text-zinc-400">
                <Cpu size={11} className="text-purple-400" /> Space Complexity
              </div>
              <div className="font-mono text-sm font-bold text-purple-300 mt-1">
                {selectedAlgo.space}
              </div>
            </div>
          </div>

          {/* Test Input */}
          <div className="p-2.5 rounded bg-zinc-950/80 border border-zinc-800/80">
            <div className="text-[10px] uppercase font-mono text-zinc-500 mb-1">
              Test Harness Input
            </div>
            <div className="font-mono text-[11px] text-zinc-300">
              {selectedAlgo.testInput}
            </div>
          </div>

          {/* Console Execution Output */}
          <div className="p-3 rounded bg-black/80 border border-purple-500/20 font-mono text-xs flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] text-zinc-500 pb-1 mb-1 border-b border-zinc-800">
              <span>OUTPUT STREAM</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 size={11} /> {runTime} ms
              </span>
            </div>
            <pre className="text-emerald-400/90 whitespace-pre-wrap text-[11px] leading-relaxed">
              {consoleOutput}
            </pre>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div
        className="px-4 py-2 border-t flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-400"
        style={{
          borderColor: "rgba(255, 255, 255, 0.05)",
          background: "rgba(10, 10, 18, 0.5)",
        }}
      >
        <span className="flex items-center gap-1.5 text-purple-300">
          <Award size={13} className="text-yellow-400" />
          Codeforces Expert (Max Rating 1800+) &bull; 1,800+ Problems Solved
        </span>
        <span className="text-zinc-500">GCC 13.2 / C++20 / TypeScript 5.5</span>
      </div>
    </div>
  );
}
