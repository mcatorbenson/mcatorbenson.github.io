/* =========================
   Lightbox
   ========================= */

#lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  cursor: zoom-out;
}

#lightbox-overlay figure {
  margin: 0;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#lightbox-overlay img {
  max-width: 100%;
  max-height: 80vh;
  width: auto;
  height: auto;
  object-fit: contain;   /* IMPORTANT */
}

#lightbox-caption {
  margin-top: 12px;
  color: #eee;
  font-size: 0.95rem;
  line-height: 1.4;
  max-width: 90%;
  text-align: center;
}
