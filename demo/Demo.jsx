import React from 'react';
import HMHYR from '../src/index';

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <HMHYR offset="top" position={{top: 50, left: 50, width: '80%', height: '20%'}}>
          <div>
            <h3>Article One</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu iaculis tellus. Etiam vel odio at mauris aliquet convallis
              id id metus. Nullam ipsum ipsum, feugiat eget feugiat ut, elementum quis sem. Nullam eu nibh eu magna luctus mollis. Duis mauris
              nibh, posuere sit amet ullamcorper in, tempor ullamcorper enim. Ut et justo eget neque tempus convallis id in urna. Cras non
              gravida ipsum, ac cursus magna. Donec faucibus feugiat dignissim. Vivamus sed quam nunc. Fusce quis purus ac nunc pulvinar varius
              ut vel nisi.
            </p>
            <p>
              Etiam semper bibendum neque, ac aliquam arcu bibendum id. In volutpat mi eget gravida tincidunt. Nunc ornare eros sed metus
              scelerisque, sed hendrerit mi condimentum. Maecenas ante nibh, hendrerit a faucibus nec, efficitur non justo. Nam mollis volutpat
              velit, a ornare turpis tincidunt sit amet. Sed efficitur urna ultrices massa porta pellentesque. Ut ac odio at turpis aliquam molestie.
            </p>
            <p>
              Aliquam erat volutpat. Pellentesque quis venenatis tortor. Nullam dignissim porta ex eget vehicula. Nullam volutpat eleifend fermentum.
              Ut dictum lectus at egestas aliquet. Fusce eu sollicitudin ligula. Proin at varius lacus. Aenean ac volutpat mauris, a faucibus ante.
              Morbi fringilla tortor id ligula luctus, in aliquam lectus gravida. Praesent justo leo, gravida ut nisi quis, aliquet posuere libero.
              Proin faucibus mi eget congue varius. Fusce ut felis eu ex suscipit faucibus. Cras viverra nisi tellus, vitae vehicula est tempus in.
              Ut ligula lectus, maximus a ultrices nec, venenatis in neque. Suspendisse suscipit mi eu convallis eleifend. Fusce maximus, turpis
              sed consequat laoreet, mauris ligula elementum arcu, quis aliquet est enim efficitur eros.
            </p>
            <p>
              Pellentesque dui neque, euismod vitae ante efficitur, faucibus cursus justo. Ut efficitur, est ac eleifend blandit, quam lorem accumsan
              mauris, in laoreet nulla risus imperdiet nisl. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Vestibulum pellentesque mi quis pharetra egestas. Morbi lacinia accumsan ante non eleifend. Sed mollis, massa vel convallis imperdiet,
              quam urna lobortis urna, eu fermentum nulla ante vel purus. Morbi felis purus, imperdiet at risus a, feugiat placerat nunc. Sed commodo
              ex suscipit auctor ultrices.
            </p>
            <p>
              Morbi posuere, est et lacinia venenatis, metus turpis rhoncus justo, vel elementum ante turpis sit amet ante. Mauris lectus mauris,
              tristique sed consequat sed, tempor vel sapien. Nulla ultricies fringilla nunc eu pellentesque. Nulla non imperdiet lacus. Nulla cursus
              nisl condimentum, aliquam nibh nec, iaculis diam. Aenean dignissim sapien et aliquet commodo. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia Curae; Proin lacinia molestie est ac fringilla. Nulla euismod lorem mi, a luctus massa mollis
              sit amet. Vivamus tellus risus, pretium in eros nec, fermentum consequat odio. Sed et tristique dolor, a sollicitudin enim. Cras aliquet
              diam eu risus commodo feugiat. Sed eu tortor at justo imperdiet volutpat. Maecenas vestibulum convallis congue.
            </p>
          </div>
        </HMHYR>
        <br/><br/><hr/><br/><br/>
        <div id="target">
          <h3>Article Two</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu iaculis tellus. Etiam vel odio at mauris aliquet convallis
            id id metus. Nullam ipsum ipsum, feugiat eget feugiat ut, elementum quis sem. Nullam eu nibh eu magna luctus mollis. Duis mauris
            nibh, posuere sit amet ullamcorper in, tempor ullamcorper enim. Ut et justo eget neque tempus convallis id in urna. Cras non
            gravida ipsum, ac cursus magna. Donec faucibus feugiat dignissim. Vivamus sed quam nunc. Fusce quis purus ac nunc pulvinar varius
            ut vel nisi.
          </p>
          <p>
            Etiam semper bibendum neque, ac aliquam arcu bibendum id. In volutpat mi eget gravida tincidunt. Nunc ornare eros sed metus
            scelerisque, sed hendrerit mi condimentum. Maecenas ante nibh, hendrerit a faucibus nec, efficitur non justo. Nam mollis volutpat
            velit, a ornare turpis tincidunt sit amet. Sed efficitur urna ultrices massa porta pellentesque. Ut ac odio at turpis aliquam molestie.
          </p>
          <p>
            Aliquam erat volutpat. Pellentesque quis venenatis tortor. Nullam dignissim porta ex eget vehicula. Nullam volutpat eleifend fermentum.
            Ut dictum lectus at egestas aliquet. Fusce eu sollicitudin ligula. Proin at varius lacus. Aenean ac volutpat mauris, a faucibus ante.
            Morbi fringilla tortor id ligula luctus, in aliquam lectus gravida. Praesent justo leo, gravida ut nisi quis, aliquet posuere libero.
            Proin faucibus mi eget congue varius. Fusce ut felis eu ex suscipit faucibus. Cras viverra nisi tellus, vitae vehicula est tempus in.
            Ut ligula lectus, maximus a ultrices nec, venenatis in neque. Suspendisse suscipit mi eu convallis eleifend. Fusce maximus, turpis
            sed consequat laoreet, mauris ligula elementum arcu, quis aliquet est enim efficitur eros.
          </p>
        </div>
        <HMHYR offset="top" position={{top: 50, left: 50, width: '80%', height: '20%'}} target="target"/>
      </div>
    );
  }
}
