export function Funnel(steps) {
  return `
    <div class="funnel">
      ${steps
        .map(
          (step) => `
            <div class="funnelStep">
              <div>
                <b>${step.label}</b>
                <span>${step.detail}</span>
              </div>
              <strong>${step.sessions}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}
