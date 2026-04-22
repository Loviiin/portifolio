%%{
  init: {
    'theme': 'dark',
    'themeVariables': {
      'fontFamily': 'monospace',
      'fontSize': '20px',
      'lineColor': '#a6adc8',
      'primaryTextColor': '#e5e9f0'
    },
    'flowchart': {
      'useMaxWidth': true,
      'nodeSpacing': 55,
      'rankSpacing': 70,
      'curve': 'basis'
    }
  }
}%%
flowchart LR
    P[Remote Player] --> T((Transport Interface))
    T --> S[Wish SSH]
    T -.-> W[WebSocket Future]

    S --> PS[Player Session]
    I[Input TTY] --> PS
    PS --> A[Arbitro Central]
    A --> G[(Global State)]
    G --> M((GameModule))
    M --> R[3D / Truco]
    R --> D[Delta Broadcast]
    D --> PS

    A -. tick .-> M
    L[Game Loop] -. snapshot .-> G
    L -. tick .-> A

    C[Camera State] --- PS
    Z[Z-Buffer Local] --- PS

    classDef interface fill:#1e222a,stroke:#61afef,stroke-width:2px,color:#e5e9f0;
    classDef core fill:#1e222a,stroke:#c678dd,stroke-width:2px,color:#e5e9f0;
    classDef state fill:#1e222a,stroke:#e06c75,stroke-width:2px,color:#e5e9f0;
    classDef session fill:#1e222a,stroke:#98c379,stroke-width:2px,color:#e5e9f0;

    class T,M interface;
    class A,L core;
    class G state;
    class PS,C,Z,I session;
