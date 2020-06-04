/* globals cy */

describe('Map controls', () => {
  beforeEach(() => {
    cy.visit('/visualiser/rechercher#7.28/44.064/5.974');

    cy.get('.mapboxgl-ctrl-zoom-in', { timeout: 15000 });

    cy.get('.tf-map')
      .then($elt => Promise.resolve($elt[0].mapboxInstance))
      .as('mapinstance');

    cy.get('@mapinstance', { timeout: 15000 }).should(mapElt => {
      // Wait for tiles to be loaded
      expect(mapElt.areTilesLoaded()).to.be.true;
      // Wait for layer to exists in mapbox layers
      console.log(mapElt.getStyle().layers);
      expect(
        mapElt
          .getStyle()
          .layers.find(({ id }) => id === '467f57e3ed81809ad58f090426a3893a'),
      ).to.exist;
    });
  });

  it('Should zoom in and out', () => {
    // Get previous zoom
    cy.get('@mapinstance')
      .then(mapInstance => Promise.resolve(mapInstance.getZoom()))
      .as('prevZoom');

    // Click on button
    cy.get('.mapboxgl-ctrl-zoom-in').click();
    cy.wait(1000);

    // Compare to new zoom
    cy.get('@mapinstance').then(mapInstance => {
      cy.get('@prevZoom').then(prevZoom => {
        expect(mapInstance.getZoom() > prevZoom).to.be.true;
      });
    });

    // Get previous zoom
    cy.get('@mapinstance')
      .then(mapboxInstance => Promise.resolve(mapboxInstance.getZoom()))
      .as('prevZoom');

    // Click on zoom out
    cy.get('.mapboxgl-ctrl-zoom-out').click();
    cy.wait(1000);

    cy.get('@mapinstance').then(mapboxInstance => {
      cy.get('@prevZoom').then(prevZoom => {
        expect(mapboxInstance.getZoom() < prevZoom).to.be.true;
      });
    });
  });
});