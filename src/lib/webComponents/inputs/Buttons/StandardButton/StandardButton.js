class StandardButton extends HTMLElement {
  static get observedAttributes() {
    return [
      'disabled',
      'classes',
      'styles',
      'text',
      'loading',
      'lefticon',
      'righticon',
      'topicon',
      'bottomicon'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._render();
  }

  attributeChangedCallback() {
    this._render();
  }

  _render() {
    //this.shadowRoot.innerHTML = `<button>hello world</button> `
    const disabled = this.hasAttribute('disabled');
    const classes = (this.getAttribute('classes') || '').split(' ');
    const styles = (this.getAttribute('styles') || '').split(';').filter(Boolean);
    const text = this.getAttribute('text') || '';
    
    //const leftIcon = this.getAttribute('lefticon') || '';
    //const rightIcon = this.getAttribute('righticon') || '';
    //const topIcon = this.getAttribute('topicon') || '';
    //const bottomIcon = this.getAttribute('bottomicon') || '';
    //const loading = this.hasAttribute('loading');

    //this.shadowRoot.innerHTML = `
    this.innerHTML= `
      <style>
        button {
          align-items: center;
          background-color: transparent;
          border-radius: var(--btn-border-radius, 4px);
          border: none;
          cursor: pointer;
          display: flex;
          text-decoration: none;
        }
      </style>

      <button   
        style="${styles.join(';')}"> hello world please.
        class="semibold ${classes.includes('btn-full') ? 'btn-full' : 'btn-fit'} ${disabled ? 'btn-disabled' : ''}"
      </button>
    `;
  }
}

// ${disabled ? 'disabled' : ''}
// <!--class="semibold ${classes.includes('btn-full') ? 'btn-full' : 'btn-fit'} ${disabled ? 'btn-disabled' : ''}"-->
// <!-- <div class="btn-content-wrapper">
//       <!--stub -->
// </div> -->


customElements.define('standard-button', StandardButton);